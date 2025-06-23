import type { FilesystemExtractContext } from '../contexts';
import type { DirectoryEntityProcessor } from '../types';

import { processDirectory } from './private';

export async function processRootDir(
	ctx: FilesystemExtractContext,
): Promise<DirectoryEntityProcessor[]> {
	return await processDirectory(ctx, ctx.rootDir);
}
