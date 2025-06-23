import type { EntityDataBase, EntityExtractContext } from '@purrception/primitives';

import type { DirectoryExtractContext } from './types';

export function createEntityExtractContext(
	context: DirectoryExtractContext,
	entity: EntityDataBase,
): EntityExtractContext<DirectoryExtractContext> {
	return { context, entity };
}
