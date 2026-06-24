import { type ParentComponent } from 'solid-js';

import type { ComposableTypeMixinProps } from '../../mixins';

import { AlignFirstLineContextCTX } from './private';

type AlignFirstLineContextProviderProps = {
	composableType: ComposableTypeMixinProps;
};

export const AlignFirstLineContextProvider: ParentComponent<
	AlignFirstLineContextProviderProps
> = props => {
	return (
		// eslint-disable-next-line solid/reactivity
		<AlignFirstLineContextCTX.Provider value={props.composableType}>
			{props.children}
		</AlignFirstLineContextCTX.Provider>
	);
};
