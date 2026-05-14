import {
	createProgramFilesContext,
	extractFunctionsFromFile,
	extractTypesFromFile,
} from '@purrception/extract-ts';
import {
	type DirectoryEntityExtractor,
	type DirectoryEntityProcessor,
	createEntityExtractContext,
} from '@purrception/source-fs';

import { resolveEntityFiles, resolveEntityPartial } from '../../heuristics';
import type { EntityExtractorOptions } from '../../heuristics/types';

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
			const { implementation, types: typesFile } = files;

			const entityContext = createEntityExtractContext(ctx, partial);
			const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);

			const types = await extractTypesFromFile(programContext, typesFile);
			const functions = await extractFunctionsFromFile(programContext, implementation);

			return [
				{
					context: entityContext,
					entity: {
						...partial,
						factories: functions,
						types,
					},
				},
			];
		};

		return [processor, true];
	};
}
