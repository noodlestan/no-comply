import type { EntityDataBase } from '@purrception/primitives';
import type { DirectoryExtractContext } from '@purrception/source-fs';

import type { EntityMetaMatcher } from '../types';

export async function resolveEntityPartial<P extends EntityDataBase>(
	ctx: DirectoryExtractContext,
	matcher?: EntityMetaMatcher<P>,
): Promise<P | undefined> {
	return await (matcher && matcher(ctx));
}
