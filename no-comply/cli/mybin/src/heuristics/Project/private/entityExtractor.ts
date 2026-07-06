import { type DirectoryEntityProcessor, createEntityExtractContext } from '@purrception/source-fs';

import type {
	ProjectEntityData,
	ProjectEntityFiles,
	ProjectEntityPartial,
} from '../../../entities';
import { createProjectEntity } from '../../../entities/Project/createProjectEntity';

export const entityExtractor: DirectoryEntityProcessor<
	ProjectEntityPartial,
	ProjectEntityFiles,
	ProjectEntityData
> = async (ctx, partial) => {
	const entityContext = createEntityExtractContext(ctx, partial);
	const entity = createProjectEntity(partial, partial.path);

	return [
		{
			context: entityContext,
			entity,
		},
	];
};
