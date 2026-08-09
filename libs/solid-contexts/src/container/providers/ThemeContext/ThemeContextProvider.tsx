/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import { ContextNodeProvider, createContextNode } from '../../../context';
import { type ThemeContextValue } from '../../contexts';

import { ThemeContextCTX } from './private';

type ThemeContextProviderProps = {
	context: ThemeContextValue;
};

export const ThemeContextProvider: ParentComponent<ThemeContextProviderProps> = props => {
	const node = () => createContextNode(props.context[0]);

	return (
		<ThemeContextCTX.Provider value={props.context}>
			<ContextNodeProvider node={node()}>{props.children}</ContextNodeProvider>
		</ThemeContextCTX.Provider>
	);
};
