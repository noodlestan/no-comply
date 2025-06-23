import { type Accessor, useContext } from 'solid-js';

import type { ContextVariant } from '../../types';

import { ContextVariantsCTX } from './private';

export const useContextVariantsConsumer = <T extends ContextVariant>(
	type: string,
	name: Accessor<string>,
): Accessor<T[]> => {
	const context = useContext(ContextVariantsCTX);
	if (!context) {
		throw new Error('useContextVariantsConsumer() must be wrapped in <ContextVariantsProvider/>');
	}

	return () => context.resolveVariant(type, name());
};
