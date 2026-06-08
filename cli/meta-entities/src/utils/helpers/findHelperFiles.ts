import path from 'path';

import type { DirectoryExtractContext } from '@purrception/source-fs';

const NON_HELPER = ['index.ts', 'types.ts', 'constants.ts'];

export async function findHelperFiles(ctx: DirectoryExtractContext): Promise<string[]> {
	if (!ctx.hasDir('helpers')) {
		return [];
	}
	const helpersFiles = await ctx.readDir('helpers');
	return helpersFiles.files.filter(f => !NON_HELPER.includes(f)).map(f => path.join('helpers', f));
}
