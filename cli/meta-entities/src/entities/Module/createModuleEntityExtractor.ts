import { createProgram, createProgramFilesContext } from '@purrception/extract-ts';
import {
	type DirectoryEntityExtractor,
	type DirectoryEntityProcessor,
	type EntityExtractorOptions,
	createEntityExtractContext,
} from '@purrception/source-fs';

import { resolveEntityFiles, resolveEntityPartial } from '../../heuristics';

import { entityMatcher, fileResolver } from './private';
import type { ModuleEntityData, ModuleEntityFiles, ModuleEntityPartial } from './types';

export function createModuleEntityExtractor(
	options: EntityExtractorOptions<ModuleEntityPartial, ModuleEntityFiles> = {},
): DirectoryEntityExtractor<ModuleEntityData> {
	return async ctx => {
		const partial = await resolveEntityPartial(ctx, options?.matcher ?? entityMatcher);
		const files =
			partial && (await resolveEntityFiles(ctx, partial, options?.resolver ?? fileResolver));

		if (!partial || !files) {
			return;
		}

		const processor: DirectoryEntityProcessor<ModuleEntityData> = async () => {
			const entityContext = createEntityExtractContext(ctx, partial);
			const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);
			const program = await createProgram(programContext, files);

			const helpers = program.extractFunctions(files.helpers);
			const types = program.extractTypes(files.types);
			const imported = program.extractExternalImports();
			const exported = program.formatExports(helpers, Object.values(types));

			return [
				{
					context: entityContext,
					entity: {
						...partial,
						types,
						helpers,
						symbols: {
							imported,
							exported,
						},
					},
				},
			];
		};

		return [processor, false];
	};
}
