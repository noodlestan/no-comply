/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import { ContextNodeProvider, createContextNode } from '../../../context';
import { FocusContextCTX } from '../../private';
import type { FocusContextValue } from '../../private';

type FocusontextProviderProps = {
	context: FocusContextValue;
};

export const FocusContextProvider: ParentComponent<FocusontextProviderProps> = props => {
	const node = () => createContextNode(props.context[0]);

	return (
		<FocusContextCTX.Provider value={props.context}>
			<ContextNodeProvider node={node()}>{props.children}</ContextNodeProvider>
		</FocusContextCTX.Provider>
	);
};
