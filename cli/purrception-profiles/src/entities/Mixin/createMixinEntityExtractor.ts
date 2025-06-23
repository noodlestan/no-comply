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

import type { MixinEntityData, MixinEntityPartial } from './types';

type Match = {
	partial: MixinEntityPartial;
	files: {
		implementation: string;
		types: string;
	};
};

type Options = {
	matcher?: (ctx: DirectoryExtractContext) => Match | undefined;
};

const DEFAULT_MATCHER = (ctx: DirectoryExtractContext): Match | undefined => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/mixins\//);
	if (!match) {
		return;
	}

	const category = match[1];
	const name = path.basename(ctx.dirMeta.path);
	const partial: MixinEntityPartial = { type: 'mixin', name, category };

	const implementation = findFactoryFile(ctx);
	const types = findTypesFile(ctx);
	if (!implementation || !types) {
		return;
	}

	return { partial, files: { implementation, types } };
};

export function createMixinEntityExtractor(
	options: Options = {},
): DirectoryEntityExtractor<MixinEntityData> {
	return async ctx => {
		const match = (options.matcher || DEFAULT_MATCHER)(ctx);
		if (!match) {
			return;
		}

		const processor: DirectoryEntityProcessor<MixinEntityData> = async () => {
			const { partial, files } = match;
			const { implementation, types: typesFile } = files;

			const entityContext = createEntityExtractContext(ctx, partial);
			const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);

			const functions = await extractFunctionsFromFile(programContext, implementation);
			const types = await extractTypesFromFile(programContext, typesFile);

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
