import { useContext } from 'solid-js';

import type { ActiveContextsServiceAPI } from '../../services';

import { ActiveContextsCTX } from './private';

export const useActiveContexts = (): ActiveContextsServiceAPI => {
	const context = useContext(ActiveContextsCTX);
	if (!context) {
		throw new Error('useActiveContexts() must be wrapped in <ActiveContextsProvider/>');
	}

	return context;
};
