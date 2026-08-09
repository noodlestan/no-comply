import type { Accessor } from 'solid-js';

import {
	reduceContextVariantData,
	reduceContextVariantVars,
	useContextVariantsConsumer,
} from '../../../context';

import type { SurfaceContext, SurfaceContextValue, SurfaceContextVariant } from './types';

export const createSurfaceContext = (value: Accessor<string>): SurfaceContextValue => {
	const resolved = useContextVariantsConsumer<SurfaceContextVariant>('surface', value);

	const contextVars = () => reduceContextVariantVars(resolved(), node => node.contextVars?.());

	const nodeData = (value: SurfaceContextVariant) => ({
		[`surface-${value.name}`]: '',
		...value.contextData?.(),
	});
	const contextData = () => reduceContextVariantData(resolved(), nodeData, { surface: value() });

	const context: SurfaceContext = {
		type: 'surface',
		value,
		contextVars,
		contextData,
	};

	return [context];
};
