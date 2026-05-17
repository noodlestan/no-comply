import type { EntityDataBase, EntityExtractResult } from '@purrception/primitives';

import type { DirectoryExtractContext } from './contexts';

export type DirectoryEntityExtractor<T extends EntityDataBase = EntityDataBase> = (
	ctx: DirectoryExtractContext,
) => Promise<[DirectoryEntityProcessor<T>, boolean] | undefined>;

export type DirectoryEntityProcessor<T extends EntityDataBase = EntityDataBase> = () => Promise<
	EntityExtractResult<T>[]
>;

export type EntityExtractorFiles = Record<string, string | string[]>;

export type EntityMetaMatcher<P extends EntityDataBase> = (
	ctx: DirectoryExtractContext,
) => Promise<P | undefined>;

export type EntityFileResolver<
	F extends EntityExtractorFiles,
	P extends EntityDataBase = EntityDataBase,
> = (ctx: DirectoryExtractContext, partial: P) => Promise<F | undefined>;

export type EntityExtractorOptions<P extends EntityDataBase, F extends EntityExtractorFiles> = {
	matcher?: EntityMetaMatcher<P>;
	resolver?: EntityFileResolver<F, P>;
};
