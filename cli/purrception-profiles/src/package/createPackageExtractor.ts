import type { EntityExtractResult } from '@purrception/primitives';
import {
	type ModuleEntityExtractor,
	createPackageExtractContext,
	processPackage,
} from '@purrception/source-package';

export async function createPackageExtractor(opts: {
	extractors: ModuleEntityExtractor[];
}): Promise<EntityExtractResult[]> {
	const ctx = createPackageExtractContext({
		rootDir: 'src/',
		extractors: opts.extractors,
		log: msg => console.info(msg),
	});

	const processors = await processPackage(ctx);
	const results = await Promise.all(processors.flatMap(fn => fn()));
	return results.flat();
}
