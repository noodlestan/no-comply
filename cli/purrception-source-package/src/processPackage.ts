import { processPackageDir } from './processPackageDir';
import type { ModuleProcessor, PackageExtractContext } from './types';

export async function processPackage(ctx: PackageExtractContext): Promise<ModuleProcessor[]> {
	return await processPackageDir(ctx, ctx.rootDir);
}
