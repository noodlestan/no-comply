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

import type { ControllerEntityData, ControllerEntityPartial } from './types';

type Match = {
	partial: ControllerEntityPartial;
	files: {
		implementation: string;
		types: string;
	};
};

type Options = {
	matcher?: (ctx: DirectoryExtractContext) => Match | undefined;
};

const DEFAULT_MATCHER = (ctx: DirectoryExtractContext): Match | undefined => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/controllers\//);
	if (!match) {
		return;
	}

	const category = match[1];
	const name = path.basename(ctx.dirMeta.path);
	const partial: ControllerEntityPartial = { type: 'controller', name, category };

	const implementation = findFactoryFile(ctx);
	const types = findTypesFile(ctx);
	if (!implementation || !types) {
		return;
	}

	return { partial, files: { implementation, types } };
};

export function createControllerEntityExtractor(
	options: Options = {},
): DirectoryEntityExtractor<ControllerEntityData> {
	return async ctx => {
		const match = (options.matcher || DEFAULT_MATCHER)(ctx);
		if (!match) {
			return;
		}

		const processor: DirectoryEntityProcessor<ControllerEntityData> = async () => {
			const { partial, files } = match;
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
