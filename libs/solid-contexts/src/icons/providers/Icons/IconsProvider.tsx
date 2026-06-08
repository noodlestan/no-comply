/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import type { IconsServiceAPI } from '../../services';

import { IconsContextCTX } from './private';

type IconsProviderProps = {
	service: IconsServiceAPI;
};

export const IconsProvider: ParentComponent<IconsProviderProps> = props => {
	return (
		<IconsContextCTX.Provider value={props.service}>{props.children}</IconsContextCTX.Provider>
	);
};
