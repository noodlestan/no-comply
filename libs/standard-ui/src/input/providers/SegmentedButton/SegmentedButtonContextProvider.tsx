/* eslint-disable solid/reactivity */
import { OptionGroupContextProvider } from '@no-comply/solid-composables';
import { ContextNodeProvider, createContextNode } from '@no-comply/solid-contexts';
import type { ParentComponent } from 'solid-js';

import type { SegmentedButtonContextValue } from '../../contexts';

import { SegmentedButtonContextCTX } from './private';

type SegmentedButtonContextProviderProps = {
	context: SegmentedButtonContextValue;
};

export const SegmentedButtonContextProvider: ParentComponent<
	SegmentedButtonContextProviderProps
> = props => {
	const node = () => createContextNode(props.context[0]);

	return (
		<OptionGroupContextProvider context={props.context[0].optionGroupContextValue()}>
			<SegmentedButtonContextCTX.Provider value={props.context}>
				<ContextNodeProvider node={node()}>{props.children}</ContextNodeProvider>
			</SegmentedButtonContextCTX.Provider>
		</OptionGroupContextProvider>
	);
};
