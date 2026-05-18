import { writeFile } from 'fs/promises';
import path from 'path';

import {
	createControllerEntityExtractor,
	createModuleEntityExtractor,
} from '@no-comply/meta-entities';
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
			return {
				type: 'controller',
				name,
				module: 'controllers',
				// eslint-disable-next-line dot-notation
				package: ctx.fsContext.meta['package'] as string,
				path: ctx.dirMeta.path,
			};
		}
	},
});

async function main() {
	const extracted = await extractEntitiesFromFileSystem({
		rootDir: 'src/',
		extractors: [moduleExtractor, controllerExtractor],
		meta: { package: '@no-comply/solid-accessibility' },
	});

	const entities = extracted.map(({ entity: e }) => e);

	// eslint-disable-next-line dot-notation
	console.info(entities.map(e => `${e['module']}/${e.type}:${e.name}`));
	await writeFile('./dist/meta.json', JSON.stringify(entities, null, 2));

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

main().catch(error => {
	console.error('Failed to extract entities from package:', error);
	process.exit(1);
});
