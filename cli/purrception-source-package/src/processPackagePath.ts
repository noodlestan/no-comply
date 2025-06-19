import { processPackageDir } from './processPackageDir';
import type { ModuleProcessor, PackageExtractContext } from './types';

export async function processPackagePaths(
	ctx: PackageExtractContext,
	paths: string[],
): Promise<ModuleProcessor[]> {
	const processorGroups = await Promise.all(paths.map(dir => processPackageDir(ctx, dir)));
	return processorGroups.flat();
}
