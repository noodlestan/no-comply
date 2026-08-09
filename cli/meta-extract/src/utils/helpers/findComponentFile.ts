import type { DirectoryExtractContext } from '@purrception/source-fs';

export function findComponentFile(ctx: DirectoryExtractContext): string | undefined {
	return ctx.dirMeta.files.find(f => f.endsWith('tsx'));
}
