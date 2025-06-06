/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import { ContextNodeProvider, createContextNode } from '../../../context';
import type { SurfaceContextValue } from '../../contexts';

import { SurfaceContextCTX } from './private';

type SurfaceContextProviderProps = {
	context: SurfaceContextValue;
};

export const SurfaceContextProvider: ParentComponent<SurfaceContextProviderProps> = props => {
	const node = () => createContextNode(props.context[0]);

	return (
		<SurfaceContextCTX.Provider value={props.context}>
			<ContextNodeProvider node={node()}>{props.children}</ContextNodeProvider>
		</SurfaceContextCTX.Provider>
	);
};
