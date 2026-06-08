/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import { ContextNodeProvider, createContextNode } from '../../../context';
import type { FieldContextValue } from '../../contexts';
import { FieldContextCTX } from '../../private';

type FieldContextProviderProps = {
	context: FieldContextValue;
};

export const FieldContextProvider: ParentComponent<FieldContextProviderProps> = props => {
	const node = () => createContextNode(props.context[0]);

	return (
		<FieldContextCTX.Provider value={props.context}>
			<ContextNodeProvider node={node()}>{props.children}</ContextNodeProvider>
		</FieldContextCTX.Provider>
	);
};
