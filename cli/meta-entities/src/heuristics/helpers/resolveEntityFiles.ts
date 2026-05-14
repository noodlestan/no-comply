import type { EntityDataBase } from '@purrception/primitives';
import type { DirectoryExtractContext } from '@purrception/source-fs';

import type { EntityExtractorFiles, EntityFileResolver } from '../types';

export async function resolveEntityFiles<P extends EntityDataBase, F extends EntityExtractorFiles>(
	ctx: DirectoryExtractContext,
	partial: P,
	resolver?: EntityFileResolver<F, P>,
): Promise<F | undefined> {
	return await (resolver && resolver(ctx, partial));
}
