import { ContextNodeProvider, createContextNode } from '@no-comply/solid-contexts';
import type { ParentComponent } from 'solid-js';

import { MenuContextCTX, type MenuContextValue } from '../../private';

type MenuContextProviderProps = {
	context: MenuContextValue;
};

export const MenuContextProvider: ParentComponent<MenuContextProviderProps> = props => {
	const node = () => createContextNode(props.context[0]);

	return (
		// eslint-disable-next-line solid/reactivity
		<MenuContextCTX.Provider value={props.context}>
			<ContextNodeProvider node={node()}>{props.children}</ContextNodeProvider>
		</MenuContextCTX.Provider>
	);
};
