/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import { type SystemContextServiceAPI, createSystemContextService } from '../../services';

import { SystemContext } from './private';

type SystemContextProviderProps = {
	systemContextService?: SystemContextServiceAPI;
};

export const SystemContextProvider: ParentComponent<SystemContextProviderProps> = props => {
	const service = props.systemContextService ?? createSystemContextService();
	return <SystemContext.Provider value={service}>{props.children}</SystemContext.Provider>;
};
