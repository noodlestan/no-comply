import type { DirectoryExtractContext } from '@purrception/source-fs';

export function findTypesFile(ctx: DirectoryExtractContext): string | undefined {
	return ctx.dirMeta.files.find(f => f === 'types.ts');
}
