import { writeFile } from 'fs/promises';
import path from 'path';

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

	console.info(path.resolve('./dist/meta.json'));
	await writeFile('./dist/meta.json', JSON.stringify(entities, null, 2));
}

main().catch(error => {
	console.error('Failed to extract entities from package:', error);
	process.exit(1);
});
