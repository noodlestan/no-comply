import { createProgram, createProgramFilesContext } from '@purrception/extract-ts';
import {
	type DirectoryEntityExtractor,
	type DirectoryEntityProcessor,
	type EntityExtractorOptions,
	createEntityExtractContext,
} from '@purrception/source-fs';

import { resolveEntityFiles, resolveEntityPartial } from '../../heuristics';

import { entityMatcher, fileResolver } from './private';
import type { ContextEntityData, ContextEntityFiles, ContextEntityPartial } from './types';

export function createContextEntityExtractor(
	options: EntityExtractorOptions<ContextEntityPartial, ContextEntityFiles> = {},
): DirectoryEntityExtractor<ContextEntityData> {
	return async ctx => {
		const partial = await resolveEntityPartial(ctx, options?.matcher ?? entityMatcher);
		const files =
			partial && (await resolveEntityFiles(ctx, partial, options.resolver ?? fileResolver));
		if (!partial || !files) return;

		const processor: DirectoryEntityProcessor<ContextEntityData> = async () => {
			const entityContext = createEntityExtractContext(ctx, partial);
			const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);
			const program = await createProgram(programContext, files);

			const functions = program.extractFunctions(files.implementation);
			const types = program.extractTypes(files.types);
			const imported = program.extractExternalImports();
			const exported = program.formatExports(functions, Object.values(types));

			return [
				{
					context: entityContext,
					entity: {
						...partial,
						factories: functions,
						types,
						symbols: {
							imported,
							exported,
						},
					},
				},
			];
		};

		return [processor, true];
	};
}
