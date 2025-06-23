import path from 'path';

import {
	createProgramFilesContext,
	extractComponentsFromFile,
	extractFunctionsFromFile,
	extractTypesFromFile,
} from '@purrception/profile-ts';
import {
	type DirectoryEntityExtractor,
	type DirectoryEntityProcessor,
	type DirectoryExtractContext,
	createEntityExtractContext,
} from '@purrception/source-fs';

import { findHookFiles, findProviderFile } from '../../private';

import type { ProviderEntityData, ProviderEntityPartial } from './types';

type Match = {
	partial: ProviderEntityPartial;
	files: {
		implementation: string;
		hooks: string[];
	};
};

type Options = {
	matcher?: (ctx: DirectoryExtractContext) => Match | undefined;
};

const DEFAULT_MATCHER = (ctx: DirectoryExtractContext): Match | undefined => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/providers\//);
	if (!match) {
		return;
	}

	const category = match[1];
	const name = path.basename(ctx.dirMeta.path);
	const partial: ProviderEntityPartial = {
		type: 'provider',
		name,
		category,
	};

	const implementation = findProviderFile(ctx);
	const hooks = findHookFiles(ctx);

	if (!implementation) {
		return;
	}

	return { partial, files: { implementation, hooks } };
};

export function createProviderEntityExtractor(
	options: Options = {},
): DirectoryEntityExtractor<ProviderEntityData> {
	return async ctx => {
		const match = (options.matcher || DEFAULT_MATCHER)(ctx);
		if (!match) {
			return;
		}

		const processor: DirectoryEntityProcessor<ProviderEntityData> = async () => {
			const { partial, files } = match;
			const { hooks, implementation } = files;

			const entityContext = createEntityExtractContext(ctx, partial);
			const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);

			const components = await extractComponentsFromFile(programContext, implementation);
			const types = await extractTypesFromFile(programContext, implementation);
			const nestedHooks = await Promise.all(
				hooks.map(file => extractFunctionsFromFile(programContext, file)),
			);

			return [
				{
					context: entityContext,
					entity: {
						...partial,
						components,
						hooks: nestedHooks.flat(),
						types,
					},
				},
			];
		};

		return [processor, true];
	};
}
