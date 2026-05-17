import { createProgram, createProgramFilesContext } from '@purrception/extract-ts';
import {
	type DirectoryEntityExtractor,
	type DirectoryEntityProcessor,
	type EntityExtractorOptions,
	createEntityExtractContext,
} from '@purrception/source-fs';

import { resolveEntityFiles, resolveEntityPartial } from '../../heuristics';

import { MATCHER as matcher, RESOLVER as resolver } from './private';
import type { MixinEntityData, MixinEntityFiles, MixinEntityPartial } from './types';

export function createMixinEntityExtractor(
	options: EntityExtractorOptions<MixinEntityPartial, MixinEntityFiles> = {},
): DirectoryEntityExtractor<MixinEntityData> {
	return async ctx => {
		const partial = await resolveEntityPartial(ctx, options?.matcher ?? matcher);
		const files =
			partial && (await resolveEntityFiles(ctx, partial, options?.resolver ?? resolver));

		if (!partial || !files) {
			return;
		}

		const processor: DirectoryEntityProcessor<MixinEntityData> = async () => {
			const entityContext = createEntityExtractContext(ctx, partial);
			const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);
			const program = await createProgram(programContext, files);

			const functions = program.extractFunctions(files.implementation);
			const types = program.extractTypes(files.types);
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
