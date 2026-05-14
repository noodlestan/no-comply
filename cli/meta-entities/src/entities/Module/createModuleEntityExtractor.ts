import {
	createProgramFilesContext,
	extractFunctionsFromFile,
	extractTypesFromFile,
} from '@purrception/extract-ts';
import {
	type DirectoryEntityExtractor,
	type DirectoryEntityProcessor,
	createEntityExtractContext,
} from '@purrception/source-fs';

import { resolveEntityFiles, resolveEntityPartial } from '../../heuristics';
import type { EntityExtractorOptions } from '../../heuristics/types';

import { MATCHER as matcher, RESOLVER as resolver } from './private';
import type { ModuleEntityData, ModuleEntityFiles, ModuleEntityPartial } from './types';

export function createModuleEntityExtractor(
	options: EntityExtractorOptions<ModuleEntityPartial, ModuleEntityFiles> = {},
): DirectoryEntityExtractor<ModuleEntityData> {
	return async ctx => {
		const partial = await resolveEntityPartial(ctx, options?.matcher ?? matcher);
		const files =
			partial && (await resolveEntityFiles(ctx, partial, options?.resolver ?? resolver));

		if (!partial || !files) {
			return;
		}

		const processor: DirectoryEntityProcessor<ModuleEntityData> = async () => {
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
