import type { EntityExtractContext, EntityExtractMeta } from '@purrception/primitives';

import type { ModuleExtractContext } from './types';

export function createEntityExtractContext(
	context: ModuleExtractContext,
	entityMeta: EntityExtractMeta,
): EntityExtractContext {
	return { context, entityMeta };
}
