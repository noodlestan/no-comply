import path from 'path';

import {
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
	matcher: async (ctx: DirectoryExtractContext) => {
		const match = ctx.dirMeta.relative.startsWith('controllers/');
		if (match) {
			const name = path.basename(ctx.dirMeta.path);
			return { type: 'controller', name };
		}
	},
});

async function main() {
	const entities = await extractEntitiesFromFileSystem({
		rootDir: 'src/',
		extractors: [moduleExtractor, controllerExtractor],
	});

	// eslint-disable-next-line dot-notation
	console.info(entities.map(({ entity: e }) => `${e['module']}/${e.type}:${e.name}`));
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
