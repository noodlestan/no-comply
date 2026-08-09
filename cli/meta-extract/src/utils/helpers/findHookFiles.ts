import type { DirectoryExtractContext } from '@purrception/source-fs';

export function findHookFiles(ctx: DirectoryExtractContext): string[] {
	return ctx.dirMeta.files.filter(f => f.startsWith('use') && f.endsWith('.ts'));
}
