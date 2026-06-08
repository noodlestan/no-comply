import type {
	ProviderEntityData,
	ProviderEntityFiles,
	ProviderEntityPartial,
} from '@no-comply/meta';
import { createProgram, createProgramFilesContext } from '@purrception/lang-ts-extract';
import {
	type DirectoryEntityExtractor,
	type DirectoryEntityProcessor,
	type EntityExtractorOptions,
	createEntityExtractContext,
} from '@purrception/source-fs';

import { resolveEntityFiles, resolveEntityPartial } from '../../heuristics';

import { entityMatcher, fileResolver } from './private';

export function createProviderEntityExtractor(
	options: EntityExtractorOptions<ProviderEntityPartial, ProviderEntityFiles> = {},
): DirectoryEntityExtractor<ProviderEntityData> {
	return async ctx => {
		const partial = await resolveEntityPartial(ctx, options?.matcher ?? entityMatcher);
		const files =
			partial && (await resolveEntityFiles(ctx, partial, options?.resolver ?? fileResolver));

		if (!partial || !files) {
			return;
		}

		const processor: DirectoryEntityProcessor<ProviderEntityData> = async () => {
			const entityContext = createEntityExtractContext(ctx, partial);
			const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);
			const program = await createProgram(programContext, files);

			const components = program.extractComponents(files.implementation);
			const hooks = program.extractFunctions(files.hooks);
			const types = program.extractTypes(files.implementation);
			const imported = program.extractExternalImports();
			const exported = program.formatExports(components, hooks, Object.values(types));

			return [
				{
					context: entityContext,
					entity: {
						...partial,
						components,
						hooks,
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
