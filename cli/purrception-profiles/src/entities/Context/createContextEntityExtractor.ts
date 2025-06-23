import path from 'path';

import {
	createProgramFilesContext,
	extractFunctionsFromFile,
	extractTypesFromFile,
} from '@purrception/profile-ts';
import {
	type DirectoryEntityExtractor,
	type DirectoryEntityProcessor,
	type DirectoryExtractContext,
	createEntityExtractContext,
} from '@purrception/source-fs';

import { findFactoryFile, findTypesFile } from '../../private';

import type { ContextEntityData, ContextEntityPartial } from './types';

type Match = {
	partial: ContextEntityPartial;
	files: {
		implementation: string;
		types?: string;
	};
};

type Options = {
	matcher?: (ctx: DirectoryExtractContext) => Match | undefined;
};

const DEFAULT_MATCHER = (ctx: DirectoryExtractContext): Match | undefined => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/contexts\//);
	if (!match) {
		return;
	}

	const category = match[1];
	const name = path.basename(ctx.dirMeta.path);
	const partial: ContextEntityPartial = {
		type: 'context',
		name,
		category,
	};

	const implementation = findFactoryFile(ctx);
	const types = findTypesFile(ctx);

	if (!implementation) {
		return;
	}

	return { partial, files: { implementation, types } };
};

export function createContextEntityExtractor(
	options: Options = {},
): DirectoryEntityExtractor<ContextEntityData> {
	return async ctx => {
		const match = (options.matcher || DEFAULT_MATCHER)(ctx);
		if (!match) {
			return;
		}

		const processor: DirectoryEntityProcessor<ContextEntityData> = async () => {
			const { partial, files } = match;
			const { types: typesFile, implementation } = files;

			const entityContext = createEntityExtractContext(ctx, partial);
			const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);

			const functions = await extractFunctionsFromFile(programContext, implementation);
			const types = typesFile ? await extractTypesFromFile(programContext, typesFile) : undefined;

			return [
				{
					context: entityContext,
					entity: {
						...partial,
						factories: functions,
						types: types ?? [],
					},
				},
			];
		};

		return [processor, true];
	};
}
