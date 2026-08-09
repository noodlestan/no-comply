import type { Accessor } from 'solid-js';

import {
	reduceContextVariantData,
	reduceContextVariantVars,
	useContextVariantsConsumer,
} from '../../../context';

import type { ModeContext, ModeContextValue, ModeContextVariant } from './types';

export const createModeContext = (value: Accessor<string>): ModeContextValue => {
	const resolved = useContextVariantsConsumer<ModeContextVariant>('mode', value);

	const contextVars = () => reduceContextVariantVars(resolved(), node => node.contextVars?.());

	const nodeData = (value: ModeContextVariant) => ({
		[`mode-${value.name}`]: '',
		...value.contextData?.(),
	});
	const contextData = () => reduceContextVariantData(resolved(), nodeData, { mode: '' });

	const context: ModeContext = {
		type: 'mode',
		value,
		contextVars,
		contextData,
	};

	return [context];
};
