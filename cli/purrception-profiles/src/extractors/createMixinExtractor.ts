import path from 'path';

import type { EntityExtractMeta } from '@purrception/primitives';
import {
	createProgramContext,
	extractFunctionData,
	extractTypeDeclarationData,
	hasJsDocIgnore,
} from '@purrception/profile-ts';
import {
	type ModuleEntityExtractor,
	type ModuleEntityProcessor,
	type ModuleExtractContext,
	createEntityExtractContext,
} from '@purrception/source-package';

const DEFAULT_MATCHER = (ctx: ModuleExtractContext) => {
	const match = ctx.moduleMeta.relative.match(/^([^/]+)\/mixins\//);
	if (match) {
		const category = match[1];
		const name = path.basename(ctx.moduleMeta.path);
		const meta = { type: 'mixin', name, category };

		const factoryFile = ctx.moduleMeta.files.find(f => f.startsWith('create'));
		const typesFile = ctx.moduleMeta.files.find(f => f === 'types.ts');
		if (!factoryFile || !typesFile) {
			return;
		}

		const files = {
			controllerFile: factoryFile,
			typesFile,
		};

		return { meta, files };
	}
};

type Match = {
	meta: EntityExtractMeta;
	files: {
		typesFile: string;
		controllerFile: string;
	};
};

type Options = {
	matcher?: (ctx: ModuleExtractContext) => Match | undefined;
};

export function createMixinExtractor(options: Options): ModuleEntityExtractor {
	return async ctx => {
		const match = (options.matcher || DEFAULT_MATCHER)(ctx);
		if (!match) {
			return;
		}

		const processor: ModuleEntityProcessor = async () => {
			const { meta, files } = match;
			const { typesFile, controllerFile } = files;

			const entityContext = createEntityExtractContext(ctx, meta);

			const readProgram = async (filename: string) =>
				createProgramContext({ path: ctx.moduleMeta.path, readFile: ctx.readFile }, filename);

			const typesTs = await readProgram(typesFile);
			const types = typesTs.types().map(n => extractTypeDeclarationData(typesTs, n));

			const implementationTs = await readProgram(controllerFile);
			const exportMap = implementationTs.getExportMap();
			const factories = implementationTs
				.functions()
				.filter(n => exportMap.has(n) && !hasJsDocIgnore(n))
				.map(n => extractFunctionData(implementationTs, n));

			return [
				{
					warnings: [],
					context: entityContext,
					entity: { ...meta, factories, types },
				},
			];
		};

		return [processor, true];
	};
}
