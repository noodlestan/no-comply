/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import type { NavigationServiceAPI } from '../../services';

import { NavigationContext } from './private';

type NavigationProviderProps = {
	service: NavigationServiceAPI;
};

export const NavigationProvider: ParentComponent<NavigationProviderProps> = props => {
	return (
		<NavigationContext.Provider value={props.service}>{props.children}</NavigationContext.Provider>
	);
};
