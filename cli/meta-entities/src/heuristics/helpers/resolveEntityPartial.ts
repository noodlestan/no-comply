import type { EntityDataBasePartial } from '@purrception/primitives';
import type { DirectoryExtractContext, EntityMetaMatcher } from '@purrception/source-fs';

export async function resolveEntityPartial<P extends EntityDataBasePartial>(
	ctx: DirectoryExtractContext,
	matcher?: EntityMetaMatcher<P>,
): Promise<P | undefined> {
	return await (matcher && matcher(ctx));
}
