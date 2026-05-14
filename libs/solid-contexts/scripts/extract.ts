import { writeFile } from 'fs/promises';

import {
	createContextEntityExtractor,
	createModuleEntityExtractor,
	createProviderEntityExtractor,
	createServiceEntityExtractor,
} from '@no-comply/meta-entities';
import { extractEntitiesFromFileSystem } from '@purrception/source-fs';

const moduleExtractor = createModuleEntityExtractor();
const serviceExtractor = createServiceEntityExtractor();
const contextExtractor = createContextEntityExtractor();
const providerExtractor = createProviderEntityExtractor();

async function main() {
	const extracted = await extractEntitiesFromFileSystem({
		rootDir: 'src/',
		extractors: [moduleExtractor, serviceExtractor, contextExtractor, providerExtractor],
		meta: { package: '@no-comply/solid-contexts' },
	});
	const entities = extracted.map(({ entity: e }) => e);

	// eslint-disable-next-line dot-notation
	console.info(entities.map(e => `${e['module']}/${e.type}:${e.name}`));
	await writeFile('./dist/meta.json', JSON.stringify(entities, null, 2));
}

main().catch(error => console.error('Failed to extract entities from package:', error));
