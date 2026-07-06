import { type ParentComponent } from 'solid-js';

import type { AlignFirstLineContextValue } from '../../contexts';
import { AlignFirstLineContextCTX } from '../../private';

type AlignFirstLineContextProviderProps = {
	context: AlignFirstLineContextValue;
};

export const AlignFirstLineContextProvider: ParentComponent<
	AlignFirstLineContextProviderProps
> = props => {
	return (
		// eslint-disable-next-line solid/reactivity
		<AlignFirstLineContextCTX.Provider value={props.context}>
			{props.children}
		</AlignFirstLineContextCTX.Provider>
	);
};
