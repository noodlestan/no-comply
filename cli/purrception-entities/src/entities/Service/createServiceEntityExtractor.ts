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

import {
	type EntityExtractorOptions,
	resolveEntityFiles,
	resolveEntityPartial,
} from '../../heuristics';

import { MATCHER as matcher, RESOLVER as resolver } from './private';
import type { ServiceEntityData, ServiceEntityFiles, ServiceEntityPartial } from './types';

export function createServiceEntityExtractor(
	options: EntityExtractorOptions<ServiceEntityPartial, ServiceEntityFiles> = {},
): DirectoryEntityExtractor<ServiceEntityData> {
	return async ctx => {
		const partial = await resolveEntityPartial(ctx, options?.matcher ?? matcher);
		const files =
			partial && (await resolveEntityFiles(ctx, partial, options?.resolver ?? resolver));

		if (!partial || !files) {
			return;
		}

		const processor: DirectoryEntityProcessor<ServiceEntityData> = async () => {
			const { implementation, types: typesFile } = files;

			const entityContext = createEntityExtractContext(ctx, partial);
			const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);

			const functions = await extractFunctionsFromFile(programContext, implementation);
			const implementationTypes = await extractTypesFromFile(programContext, implementation);
			const types = await extractTypesFromFile(programContext, typesFile);

			return [
				{
					context: entityContext,
					entity: {
						...partial,
						factories: functions,
						types: [...types, ...implementationTypes],
					},
				},
			];
		};

		return [processor, true];
	};
}
