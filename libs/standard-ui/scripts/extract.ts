import { mkdir, stat, writeFile } from 'fs/promises';
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

	await mkdir('./dist', { recursive: true });
	await writeFile('./dist/meta.json', JSON.stringify({ entities }, null, 2));
	const fileStats = await stat('./dist/meta.json');
	const fileSizeInBytes = fileStats.size;
	console.info(
		`Wrote : ${path.resolve('./dist/meta.json')} (entities: ${entities.length} size: ${fileSizeInBytes} bytes)`,
	);
}

main().catch(error => {
	console.error('Failed to extract entities from package:', error);
	process.exit(1);
});
