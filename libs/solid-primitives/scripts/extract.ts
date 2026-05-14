import { writeFile } from 'fs/promises';

import { createModuleEntityExtractor } from '@no-comply/meta-entities';
import { extractEntitiesFromFileSystem } from '@purrception/source-fs';

const moduleExtractor = createModuleEntityExtractor();
async function main() {
	const extracted = await extractEntitiesFromFileSystem({
		rootDir: 'src/',
		extractors: [moduleExtractor],
		meta: { package: '@no-comply/solid-primitives' },
	});
	const entities = extracted.map(({ entity: e }) => e);

	// eslint-disable-next-line dot-notation
	console.info(entities.map(e => `${e['module']}/${e.type}:${e.name}`));
	await writeFile('./dist/meta.json', JSON.stringify(entities, null, 2));
}

main().catch(error => console.error('Failed to extract entities from package:', error));
