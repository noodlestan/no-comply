import type { EntityDataBase } from '@purrception/primitives';
import type { DirectoryExtractContext, EntityMetaMatcher } from '@purrception/source-fs';

export async function resolveEntityPartial<P extends EntityDataBase>(
	ctx: DirectoryExtractContext,
	matcher?: EntityMetaMatcher<P>,
): Promise<P | undefined> {
	return await (matcher && matcher(ctx));
}
