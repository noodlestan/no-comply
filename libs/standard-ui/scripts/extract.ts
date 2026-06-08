import { writeFile } from 'fs/promises';
import path from 'path';

import {
	createComponentEntityExtractor,
	createControllerEntityExtractor,
	createMixinEntityExtractor,
	createModuleEntityExtractor,
	createProviderEntityExtractor,
} from '@no-comply/meta-extract';
import { extractEntitiesFromFileSystem } from '@purrception/source-fs';

const moduleExtractor = createModuleEntityExtractor();
const componentExtractor = createComponentEntityExtractor();
const controllerExtractor = createControllerEntityExtractor();
const mixinExtractor = createMixinEntityExtractor();
const providerExtractor = createProviderEntityExtractor();

async function main() {
	const extracted = await extractEntitiesFromFileSystem({
		rootDir: 'src/',
		extractors: [
			moduleExtractor,
			componentExtractor,
			controllerExtractor,
			mixinExtractor,
			providerExtractor,
		],
		meta: { package: '@no-comply/standard-ui' },
	});
	const entities = extracted.map(({ entity: e }) => e);

	console.info(path.resolve('./dist/meta.json'));
	await writeFile('./dist/meta.json', JSON.stringify(entities, null, 2));
}

main().catch(error => {
	console.error('Failed to extract entities from package:', error);
	process.exit(1);
});
