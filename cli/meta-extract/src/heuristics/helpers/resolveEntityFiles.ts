import type { EntityDataBasePartial } from '@purrception/primitives';
import type {
	DirectoryExtractContext,
	EntityExtractorFiles,
	EntityFileResolver,
} from '@purrception/source-fs';

export async function resolveEntityFiles<
	P extends EntityDataBasePartial,
	F extends EntityExtractorFiles,
>(
	ctx: DirectoryExtractContext,
	partial: P,
	resolver: EntityFileResolver<P, F>,
): Promise<F | undefined> {
	return await (resolver && resolver(ctx, partial));
}
