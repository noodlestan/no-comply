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

import { findComponentFile, findFactoryFile, findTypesFile } from '../../private';

import type { ComponentEntityData, ComponentEntityPartial } from './types';

type Match = {
	partial: ComponentEntityPartial;
	files: {
		implementation: string;
		factory: string;
		types: string;
	};
};

type Options = {
	matcher?: (ctx: DirectoryExtractContext) => Match | undefined;
};

const DEFAULT_MATCHER = (ctx: DirectoryExtractContext): Match | undefined => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/components\//);
	if (!match) {
		return;
	}

	const category = match[1];
	const name = path.basename(ctx.dirMeta.path);
	const partial: ComponentEntityPartial = { type: 'component', name, category };

	const implementation = findComponentFile(ctx);
	const factory = findFactoryFile(ctx);
	const types = findTypesFile(ctx);
	if (!implementation || !factory || !types) {
		return;
	}

	return { partial, files: { implementation, factory, types } };
};

export function createComponentEntityExtractor(
	options: Options = {},
): DirectoryEntityExtractor<ComponentEntityData> {
	return async ctx => {
		const match = (options.matcher || DEFAULT_MATCHER)(ctx);
		if (!match) {
			return;
		}

		const processor: DirectoryEntityProcessor<ComponentEntityData> = async () => {
			const { partial, files } = match;
			const { factory, implementation, types: typesFile } = files;

			const entityContext = createEntityExtractContext(ctx, partial);
			const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);

			const components = await extractComponentsFromFile(programContext, implementation);
			const componentTypes = await extractTypesFromFile(programContext, implementation);
			const functions = await extractFunctionsFromFile(programContext, factory);
			const types = await extractTypesFromFile(programContext, typesFile);

			if (!components.length) {
				return [];
			}

			return [
				{
					context: entityContext,
					entity: {
						...partial,
						component: components[0],
						factory: functions[0],
						types: [...types, ...componentTypes],
					},
				},
			];
		};

		return [processor, true];
	};
}
