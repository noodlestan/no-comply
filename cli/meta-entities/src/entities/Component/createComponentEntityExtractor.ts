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
import type { ComponentEntityData, ComponentEntityFiles, ComponentEntityPartial } from './types';

export function createComponentEntityExtractor(
	options: EntityExtractorOptions<ComponentEntityPartial, ComponentEntityFiles> = {},
): DirectoryEntityExtractor<ComponentEntityData> {
	return async ctx => {
		const partial = await resolveEntityPartial(ctx, options?.matcher ?? matcher);
		const files = partial && (await resolveEntityFiles(ctx, partial, options.resolver ?? resolver));
		if (!partial || !files) {
			return;
		}

		const processor: DirectoryEntityProcessor<ComponentEntityData> = async () => {
			const { factory, implementation, types: typesFile } = files;

			const entityContext = createEntityExtractContext(ctx, partial);
			const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);

			const components = await extractComponentsFromFile(programContext, implementation);
			const implementationTypes = await extractTypesFromFile(programContext, implementation);
			const functions = await extractFunctionsFromFile(programContext, factory);
			const types = await extractTypesFromFile(programContext, typesFile);

			if (!components.length) {
				return [];
			}

			return [
				{
					context: entityContext,
					entity: {
						...partial,
						component: components[0],
						factory: functions[0],
						types: [...types, ...implementationTypes],
					},
				},
			];
		};

		return [processor, true];
	};
}
