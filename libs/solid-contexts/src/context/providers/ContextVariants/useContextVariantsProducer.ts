import { type Accessor, onCleanup, useContext } from 'solid-js';

import type { ContextVariant } from '../../types';

import { ContextVariantsCTX } from './private/ContextVariantsCTX';

export const useContextVariantsProducer = (variants: Accessor<ContextVariant[]>): void => {
	const context = useContext(ContextVariantsCTX);
	if (!context) {
		throw new Error('useContextVariantsProducer() must be wrapped in <ContextVariantsProvider/>');
	}

	context.registerVariants(variants);
	onCleanup(() => {
		context.unregisterVariants(variants);
	});
};
