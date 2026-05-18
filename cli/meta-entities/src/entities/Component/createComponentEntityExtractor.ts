import { createProgram, createProgramFilesContext } from '@purrception/extract-ts';
import {
	type DirectoryEntityExtractor,
	type DirectoryEntityProcessor,
	type EntityExtractorOptions,
	createEntityExtractContext,
} from '@purrception/source-fs';

import { resolveEntityFiles, resolveEntityPartial } from '../../heuristics';

import { entityMatcher, fileResolver } from './private';
import type { ComponentEntityData, ComponentEntityFiles, ComponentEntityPartial } from './types';

export function createComponentEntityExtractor(
	options: EntityExtractorOptions<ComponentEntityPartial, ComponentEntityFiles> = {},
): DirectoryEntityExtractor<ComponentEntityData> {
	return async ctx => {
		const partial = await resolveEntityPartial(ctx, options?.matcher ?? entityMatcher);
		const files =
			partial && (await resolveEntityFiles(ctx, partial, options.resolver ?? fileResolver));
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

			const types = program.extractTypes([files.implementation, files.types]);
			const functions = program.extractFunctions(files.factory);

			const imported = program.extractExternalImports();
			const exported = program.formatExports([functions[0], components[0]], Object.values(types));

			return [
				{
					context: entityContext,
					entity: {
						...partial,
						component: components[0],
						factory: functions[0],
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
