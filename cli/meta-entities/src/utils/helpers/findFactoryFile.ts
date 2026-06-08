import type { DirectoryExtractContext } from '@purrception/source-fs';

export function findFactoryFile(ctx: DirectoryExtractContext): string | undefined {
	return ctx.dirMeta.files.find(f => f.startsWith('create'));
}
