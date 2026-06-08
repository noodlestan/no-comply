import { type ParentComponent } from 'solid-js';

import type { SolidCodeLayoutContextValue } from '../../contexts';

import { SolidCodeLayoutCTX } from './private';

type Props = {
	context: SolidCodeLayoutContextValue;
};

export const SolidCodeLayoutProvider: ParentComponent<Props> = props => {
	return (
		// eslint-disable-next-line solid/reactivity
		<SolidCodeLayoutCTX.Provider value={props.context}>
			{props.children}
		</SolidCodeLayoutCTX.Provider>
	);
};
