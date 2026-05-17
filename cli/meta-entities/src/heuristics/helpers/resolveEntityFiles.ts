import type { EntityDataBase } from '@purrception/primitives';
import type {
	DirectoryExtractContext,
	EntityExtractorFiles,
	EntityFileResolver,
} from '@purrception/source-fs';

export async function resolveEntityFiles<P extends EntityDataBase, F extends EntityExtractorFiles>(
	ctx: DirectoryExtractContext,
	partial: P,
	resolver?: EntityFileResolver<F, P>,
): Promise<F | undefined> {
	return await (resolver && resolver(ctx, partial));
}
