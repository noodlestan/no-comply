/* eslint-disable solid/reactivity */
import { ContextNodeProvider, createContextNode } from '@no-comply/solid-contexts';
import type { ParentComponent } from 'solid-js';

import type { OptionGroupContextValue } from '../../contexts';

import { OptionGroupContextCTX } from './private';

type OptionGroupContextProviderProps = {
	context: OptionGroupContextValue;
};

export const OptionGroupContextProvider: ParentComponent<
	OptionGroupContextProviderProps
> = props => {
	const node = () => createContextNode(props.context[0]);

	return (
		<OptionGroupContextCTX.Provider value={props.context}>
			<ContextNodeProvider node={node()}>{props.children}</ContextNodeProvider>
		</OptionGroupContextCTX.Provider>
	);
};
