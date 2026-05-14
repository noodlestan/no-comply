import {
	createProgramFilesContext,
	extractComponentsFromFile,
	extractFunctionsFromFile,
	extractTypesFromFile,
} from '@purrception/extract-ts';
import {
	type DirectoryEntityExtractor,
	type DirectoryEntityProcessor,
	createEntityExtractContext,
} from '@purrception/source-fs';

import {
	type EntityExtractorOptions,
	resolveEntityFiles,
	resolveEntityPartial,
} from '../../heuristics';

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
			const { hooks, implementation } = files;

			const entityContext = createEntityExtractContext(ctx, partial);
			const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);

			const components = await extractComponentsFromFile(programContext, implementation);
			const implementationTypes = await extractTypesFromFile(programContext, implementation);
			const types = await extractTypesFromFile(programContext, implementation);
			const nestedHooks = await Promise.all(
				hooks.map(file => extractFunctionsFromFile(programContext, file)),
			);

			return [
				{
					context: entityContext,
					entity: {
						...partial,
						components,
						hooks: nestedHooks.flat(),
						types: [...types, ...implementationTypes],
					},
				},
			];
		};

		return [processor, true];
	};
}
