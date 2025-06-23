import { createModuleEntityExtractor } from '@no-comply/purrception-profiles';
import { extractEntitiesFromFileSystem } from '@purrception/source-fs';

const moduleExtractor = createModuleEntityExtractor();
async function main() {
	const entities = await extractEntitiesFromFileSystem({
		rootDir: 'src/',
		extractors: [moduleExtractor],
	});

	// eslint-disable-next-line dot-notation
	console.info(entities.map(({ entity: e }) => `${e['module']}/${e.type}:${e.name}`));
	console.info(JSON.stringify(entities.map(({ entity: e }) => e)));
}

main().catch(error => console.error('Failed to extract entities from package:', error));
