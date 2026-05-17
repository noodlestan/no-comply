import { createProgram, createProgramFilesContext } from '@purrception/extract-ts';
import {
	type DirectoryEntityExtractor,
	type DirectoryEntityProcessor,
	type EntityExtractorOptions,
	createEntityExtractContext,
} from '@purrception/source-fs';

import { resolveEntityFiles, resolveEntityPartial } from '../../heuristics';

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
			const entityContext = createEntityExtractContext(ctx, partial);
			const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);
			const program = await createProgram(programContext, files);

			const components = program.extractComponents(files.implementation);

			if (!components.length) {
				return [];
			}

			const implementationTypes = program.extractTypes(files.implementation);
			const functions = program.extractFunctions(files.factory);
			const types = program.extractTypes(files.types);

			const dependencies = program.extractImports();

			return [
				{
					context: entityContext,
					entity: {
						...partial,
						component: components[0],
						factory: functions[0],
						types: [...types, ...implementationTypes],
						dependencies,
					},
				},
			];
		};

		return [processor, true];
	};
}
