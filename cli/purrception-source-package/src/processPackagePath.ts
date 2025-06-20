import { processPackageDir } from './processPackageDir';
import type { ModuleEntityProcessor, PackageExtractContext } from './types';

export async function processPackagePaths(
	ctx: PackageExtractContext,
	paths: string[],
): Promise<ModuleEntityProcessor[]> {
	const processorGroups = await Promise.all(paths.map(dir => processPackageDir(ctx, dir)));
	return processorGroups.flat();
}
