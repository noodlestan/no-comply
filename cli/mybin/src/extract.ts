import { writeFile } from 'fs/promises';
import path from 'path';

import { extractEntitiesFromFileSystem } from '@purrception/source-fs';

import { createCheckoutEntityExtractor, createProjectEntityExtractor } from './heuristics';

const projectExtractor = createProjectEntityExtractor();
const checkoutExtractor = createCheckoutEntityExtractor();

const regExp = /(\.git|node_modules)/;

export async function extract(): Promise<void> {
	const extracted = await extractEntitiesFromFileSystem({
		rootDir: '.',
		hooks: {
			directoryFilter: (name: string) => regExp.test(name),
		},
		extractors: [projectExtractor, checkoutExtractor],
		meta: { package: '<workspace>' },
	});
	const entities = extracted.map(({ entity: e }) => e);

	console.info(path.resolve('./meta.json'));
	await writeFile('./meta.json', JSON.stringify({ entities }, null, 2));
}
