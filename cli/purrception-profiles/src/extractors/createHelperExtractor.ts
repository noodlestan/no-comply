import path from 'path';

import type { EntityExtractMeta } from '@purrception/primitives';
import { createProgramContext, extractFunctionData, hasJsDocIgnore } from '@purrception/profile-ts';
import {
	type ModuleEntityExtractor,
	type ModuleEntityProcessor,
	type ModuleExtractContext,
	createEntityExtractContext,
} from '@purrception/source-package';

const NON_HELPER = ['index.ts', 'types.ts', 'constants.ts'];

const DEFAULT_MATCHER = (ctx: ModuleExtractContext): Match | undefined => {
	const match = ctx.moduleMeta.relative.match(/^([^/]+)\/helpers\//);
	if (match) {
		const category = match[1];
		const helperFiles = ctx.moduleMeta.files.filter(f => !NON_HELPER.includes(f));

		return {
			files: helperFiles.map(file => {
				const meta = {
					type: 'helper',
					name: path.parse(file).name,
					category,
				};

				return [file, meta];
			}),
		};
	}
};

type Match = {
	files: [string, EntityExtractMeta][];
};

type Options = {
	matcher?: (ctx: ModuleExtractContext) => Match | undefined;
};

export function createHelperExtractor(options: Options): ModuleEntityExtractor {
	return async ctx => {
		const match = (options.matcher || DEFAULT_MATCHER)(ctx);
		if (!match) {
			return;
		}

		const processor: ModuleEntityProcessor = async () => {
			const { files } = match;

			const helpers = files.map(async ([filename, meta]) => {
				const entityContext = createEntityExtractContext(ctx, meta);

				const readProgram = async (filename: string) =>
					createProgramContext({ path: ctx.moduleMeta.path, readFile: ctx.readFile }, filename);

				const implementationTs = await readProgram(filename);
				const exportMap = implementationTs.getExportMap();
				const signatures = implementationTs
					.functions()
					.filter(n => exportMap.has(n) && !hasJsDocIgnore(n))
					.map(n => extractFunctionData(implementationTs, n));

				return {
					warnings: [],
					context: entityContext,
					entity: { ...meta, signatures },
				};
			});

			return await Promise.all(helpers);
		};

		return [processor, true];
	};
}
