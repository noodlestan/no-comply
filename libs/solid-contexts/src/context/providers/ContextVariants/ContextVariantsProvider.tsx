/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import { createContextVariantsService } from '../../private';

import { ContextVariantsCTX } from './private';

export const ContextVariantsProvider: ParentComponent = props => {
	const service = createContextVariantsService();
	return (
		<ContextVariantsCTX.Provider value={service}>{props.children}</ContextVariantsCTX.Provider>
	);
};
