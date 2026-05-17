import { createProgram, createProgramFilesContext } from '@purrception/extract-ts';
import {
	type DirectoryEntityExtractor,
	type DirectoryEntityProcessor,
	type EntityExtractorOptions,
	createEntityExtractContext,
} from '@purrception/source-fs';

import { resolveEntityFiles, resolveEntityPartial } from '../../heuristics';

import { MATCHER as matcher, RESOLVER as resolver } from './private';
import type { ControllerEntityData, ControllerEntityFiles, ControllerEntityPartial } from './types';

export function createControllerEntityExtractor(
	options: EntityExtractorOptions<ControllerEntityPartial, ControllerEntityFiles> = {},
): DirectoryEntityExtractor<ControllerEntityData> {
	return async ctx => {
		const partial = await resolveEntityPartial(ctx, options?.matcher ?? matcher);
		const files =
			partial && (await resolveEntityFiles(ctx, partial, options?.resolver ?? resolver));
		if (!partial || !files) {
			return;
		}

		const processor: DirectoryEntityProcessor<ControllerEntityData> = async () => {
			const entityContext = createEntityExtractContext(ctx, partial);
			const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);
			const program = await createProgram(programContext, files);

			const functions = program.extractFunctions(files.implementation);
			const types = program.extractTypes();
			const dependencies = program.extractImports();

			return [
				{
					context: entityContext,
					entity: {
						...partial,
						factories: functions,
						types,
						dependencies,
					},
				},
			];
		};

		return [processor, true];
	};
}
