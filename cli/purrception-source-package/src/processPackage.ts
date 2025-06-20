import { processPackageDir } from './processPackageDir';
import type { ModuleEntityProcessor, PackageExtractContext } from './types';

export async function processPackage(ctx: PackageExtractContext): Promise<ModuleEntityProcessor[]> {
	return await processPackageDir(ctx, ctx.rootDir);
}
