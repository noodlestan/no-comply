import { createProgram, createProgramFilesContext } from '@purrception/extract-ts';
import {
	type DirectoryEntityExtractor,
	type DirectoryEntityProcessor,
	type EntityExtractorOptions,
	createEntityExtractContext,
} from '@purrception/source-fs';

import { resolveEntityFiles, resolveEntityPartial } from '../../heuristics';

import { MATCHER as matcher, RESOLVER as resolver } from './private';
import type { ProviderEntityData, ProviderEntityFiles, ProviderEntityPartial } from './types';

export function createProviderEntityExtractor(
	options: EntityExtractorOptions<ProviderEntityPartial, ProviderEntityFiles> = {},
): DirectoryEntityExtractor<ProviderEntityData> {
	return async ctx => {
		const partial = await resolveEntityPartial(ctx, options?.matcher ?? matcher);
		const files =
			partial && (await resolveEntityFiles(ctx, partial, options?.resolver ?? resolver));

		if (!partial || !files) {
			return;
		}

		const processor: DirectoryEntityProcessor<ProviderEntityData> = async () => {
			const entityContext = createEntityExtractContext(ctx, partial);
			const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);
			const program = await createProgram(programContext, files);

			const components = program.extractComponents(files.implementation);
			const types = program.extractTypes(files.implementation);
			const hooks = program.extractFunctions(files.hooks);
			const dependencies = program.extractImports();

			return [
				{
					context: entityContext,
					entity: {
						...partial,
						components,
						hooks,
						types,
						dependencies,
					},
				},
			];
		};

		return [processor, true];
	};
}
