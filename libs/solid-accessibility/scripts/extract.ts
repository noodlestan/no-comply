import path from 'path';

import {
	type ControllerEntityPartial,
	createControllerEntityExtractor,
	createModuleEntityExtractor,
} from '@no-comply/purrception-profiles';
import {
	type DirectoryExtractContext,
	extractEntitiesFromFileSystem,
	// createDebouncedWatcher,
	// processPackagePaths,
	// splitContextsToUpdate,
} from '@purrception/source-fs';

const moduleExtractor = createModuleEntityExtractor();
const controllerExtractor = createControllerEntityExtractor({
	matcher: (ctx: DirectoryExtractContext) => {
		if (ctx.dirMeta.relative.startsWith('controllers/')) {
			const name = path.basename(ctx.dirMeta.path);
			const partial: ControllerEntityPartial = { type: 'controller', name };

			const implementation = ctx.dirMeta.files.find(f => f.startsWith('create'));
			if (!implementation) {
				throw new Error(`No implementation file found in "${ctx.dirMeta.relative}"`);
			}

			const files = {
				implementation,
				types: 'types.ts',
			};
			return { partial, files };
		}
	},
});

async function main() {
	const entities = await extractEntitiesFromFileSystem({
		rootDir: 'src/',
		extractors: [moduleExtractor, controllerExtractor],
	});

	// eslint-disable-next-line dot-notation
	console.info(entities.map(({ entity: e }) => `${e['category']}/${e.type}:${e.name}`));
	console.info(JSON.stringify(entities.map(({ entity: e }) => e)));

	// createDebouncedWatcher({
	// 	rootDir: packageContext.rootDir,
	// 	onChange: async changedPaths => {
	// 		console.info('CHANGED:', changedPaths);
	// 		const [paths] = splitContextsToUpdate(extractedEntities, changedPaths);
	// 		const processors = await processPaths(packageContext, paths);
	// 		const nestedEntities = await Promise.all(processors.flat().map(process => process()));
	// 		const updatedEntities = nestedEntities.flat();
	// 		console.info(paths, updatedEntities);
	// 	},
	// });
}

main().catch(error => console.error('Failed to extract entities from package:', error));
