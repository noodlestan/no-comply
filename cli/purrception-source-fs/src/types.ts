import type { EntityDataBase, EntityExtractResult } from '@purrception/primitives';

import type { DirectoryExtractContext } from './contexts';

export type DirectoryEntityExtractor<T extends EntityDataBase = EntityDataBase> = (
	ctx: DirectoryExtractContext,
) => Promise<[DirectoryEntityProcessor<T>, boolean] | undefined>;

export type DirectoryEntityProcessor<T extends EntityDataBase = EntityDataBase> = () => Promise<
	EntityExtractResult<T>[]
>;
