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
import type { ContextEntityData, ContextEntityFiles, ContextEntityPartial } from './types';

export function createContextEntityExtractor(
	options: EntityExtractorOptions<ContextEntityPartial, ContextEntityFiles> = {},
): DirectoryEntityExtractor<ContextEntityData> {
	return async ctx => {
		const partial = await resolveEntityPartial(ctx, options?.matcher ?? matcher);
		const files = partial && (await resolveEntityFiles(ctx, partial, options.resolver ?? resolver));
		if (!partial || !files) return;

		const processor: DirectoryEntityProcessor<ContextEntityData> = async () => {
			const { implementation, types: typesFile } = files;

			const entityContext = createEntityExtractContext(ctx, partial);
			const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);

			const functions = await extractFunctionsFromFile(programContext, implementation);
			const types = typesFile ? await extractTypesFromFile(programContext, typesFile) : [];

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
