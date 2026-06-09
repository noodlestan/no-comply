import type {
	ComponentEntityData,
	ComponentEntityFiles,
	ComponentEntityPartial,
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

			const imported = program.extractImportedSymbols();
			const factory = functions[0];
			const component = components[0];
			const declared = program.indexDeclaredSymbols([factory, component], types);

			return [
				{
					context: entityContext,
					entity: {
						...partial,
						component: components[0].name,
						group: partial.module || 'misc',
						factory: functions[0].name,
						types,
						symbols: {
							imported,
							declared,
						},
					},
				},
			];
		};

		return [processor, true];
	};
}
