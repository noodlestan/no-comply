import type { ContextEntityData, ContextEntityFiles, ContextEntityPartial } from '@no-comply/meta';
import { createProgram, createProgramFilesContext } from '@purrception/lang-ts-extract';
import {
	type DirectoryEntityExtractor,
	type DirectoryEntityProcessor,
	type EntityExtractorOptions,
	createEntityExtractContext,
} from '@purrception/source-fs';

import { resolveEntityFiles, resolveEntityPartial } from '../../heuristics';

import { entityMatcher, fileResolver } from './private';

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

			const imported = program.extractImportedSymbols();
			const declared = program.indexDeclaredSymbols(functions, types);

			return [
				{
					context: entityContext,
					entity: {
						...partial,
						factories: functions.map(factory => factory.name),
						symbols: {
							imported,
							declared,
						},
					},
				},
			];
		};

		return [processor, false];
	};
}
