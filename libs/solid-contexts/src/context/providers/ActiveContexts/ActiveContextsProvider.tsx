/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import type { ActiveContextsServiceAPI } from '../../services';

import { ActiveContextsCTX } from './private';

type ActiveContextsProviderProps = {
	service: ActiveContextsServiceAPI;
};

export const ActiveContextsProvider: ParentComponent<ActiveContextsProviderProps> = props => {
	return (
		<ActiveContextsCTX.Provider value={props.service}>{props.children}</ActiveContextsCTX.Provider>
	);
};
