import { type DirectoryEntityProcessor, createEntityExtractContext } from '@purrception/source-fs';

import type {
	CheckoutEntityData,
	CheckoutEntityFiles,
	CheckoutEntityPartial,
} from '../../../entities';
import { createCheckoutEntity } from '../../../entities/Checkout/createCheckoutEntity';
import { readCheckoutState } from '../../../helpers';

export const entityExtractor: DirectoryEntityProcessor<
	CheckoutEntityPartial,
	CheckoutEntityFiles,
	CheckoutEntityData
> = async (ctx, partial) => {
	const entityContext = createEntityExtractContext(ctx, partial);
	const state = readCheckoutState(partial.path);
	const entity = createCheckoutEntity(partial, state);

	return [
		{
			context: entityContext,
			entity,
		},
	];
};
