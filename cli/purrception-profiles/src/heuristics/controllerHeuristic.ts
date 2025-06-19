import path from 'path';

import { type EntityExtractMeta, type EntityExtractResult } from '@purrception/primitives';
import {
	createProgramContext,
	extractFunctionData,
	extractTypeDeclarationData,
	hasJsDocIgnore,
} from '@purrception/profile-ts';
import {
	type ModuleExtractHeuristic,
	type ModuleProcessor,
	createEntityExtractContext,
} from '@purrception/source-package';

import type { ControllerData } from '../types';

export const controllerHeuristic: ModuleExtractHeuristic = async ctx => {
	const b = path.basename(ctx.moduleMeta.path);

	if (ctx.moduleMeta.relative.startsWith('controllers') && ctx.hasFile('types.ts')) {
		const name = path.basename(b);
		const entityMeta: EntityExtractMeta = { type: 'composable', name };

		const processor: ModuleProcessor = async () => {
			const entityContext = createEntityExtractContext(ctx, entityMeta);

			const controllerFile = ctx.moduleMeta.files.find(name => name.startsWith('create'));

			const options = {
				path: ctx.moduleMeta.path,
				readFile: ctx.readFile,
			};
			const readProgram = async (filename: string) => createProgramContext(options, filename);

			const typesTs = await readProgram('types.ts');
			const types = typesTs.types().map(node => extractTypeDeclarationData(typesTs, node));

			const implementationTs = await readProgram(controllerFile as string);
			const exportMap = implementationTs.getExportMap();
			const filtered = implementationTs.functions().filter(node => {
				return exportMap.has(node) && !hasJsDocIgnore(node);
			});

			const factories = filtered.map(node => extractFunctionData(implementationTs, node));

			const result: EntityExtractResult<ControllerData> = {
				warnings: [],
				context: entityContext,
				entity: {
					...entityMeta,
					factories,
					types,
				},
			};
			return [result];
		};
		return [processor, entityMeta, true];
	}
};
