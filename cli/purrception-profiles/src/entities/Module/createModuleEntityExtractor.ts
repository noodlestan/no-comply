import {
	createProgramFilesContext,
	extractFunctionsFromFile,
	extractTypesFromFile,
} from '@purrception/profile-ts';
import {
	type DirectoryEntityExtractor,
	type DirectoryEntityProcessor,
	type DirectoryExtractContext,
	createEntityExtractContext,
} from '@purrception/source-fs';

import { findHelperFiles, findTypesFile } from '../../private';

import type { ModuleEntityData, ModuleEntityPartial } from './types';

type Match = {
	partial: ModuleEntityPartial;
	files: {
		types?: string;
		helpers: string[];
	};
};

type Options = {
	matcher?: (ctx: DirectoryExtractContext) => Match | undefined;
};

const DEFAULT_MATCHER = async (ctx: DirectoryExtractContext): Promise<Match | undefined> => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)$/);
	if (!match) {
		return;
	}

	const name = match[1];
	const partial: ModuleEntityPartial = {
		type: 'module',
		name,
	};

	const types = findTypesFile(ctx);
	const helpers = await findHelperFiles(ctx);

	return {
		partial,
		files: { types, helpers: helpers || [] },
	};
};

export function createModuleEntityExtractor(
	options: Options = {},
): DirectoryEntityExtractor<ModuleEntityData> {
	return async ctx => {
		const match = await (options.matcher || DEFAULT_MATCHER)(ctx);
		if (!match) {
			return;
		}

		const processor: DirectoryEntityProcessor<ModuleEntityData> = async () => {
			const { partial, files } = match;
			const { helpers, types: typesFile } = files;

			const entityContext = createEntityExtractContext(ctx, partial);
			const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);

			const types = typesFile ? await extractTypesFromFile(programContext, typesFile) : [];
			const nestedHelpers = await Promise.all(
				helpers.map(file => extractFunctionsFromFile(programContext, file)),
			);

			return [
				{
					context: entityContext,
					entity: {
						...partial,
						types,
						helpers: nestedHelpers.flat(),
					},
				},
			];
		};

		return [processor, false];
	};
}
