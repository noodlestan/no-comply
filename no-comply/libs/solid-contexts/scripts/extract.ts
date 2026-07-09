import { mkdir, stat, writeFile } from 'fs/promises';
import path from 'path';

import {
	createContextEntityExtractor,
	createModuleEntityExtractor,
	createProviderEntityExtractor,
	createServiceEntityExtractor,
} from '@no-comply/meta-extract';
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
