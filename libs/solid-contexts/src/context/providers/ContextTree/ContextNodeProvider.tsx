/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import type { ContextNodeValue } from '../../contexts';
import { ContextNodeCTX } from '../../private';

type ContextNodeProviderProps = {
	node: ContextNodeValue;
};

export const ContextNodeProvider: ParentComponent<ContextNodeProviderProps> = props => {
	return <ContextNodeCTX.Provider value={props.node}>{props.children}</ContextNodeCTX.Provider>;
};
