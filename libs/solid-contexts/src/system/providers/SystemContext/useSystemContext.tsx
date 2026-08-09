import { useContext } from 'solid-js';

import type { SystemContextServiceAPI } from '../../services';

import { SystemContext } from './private';

export const useSystemContext = (): SystemContextServiceAPI => {
	const context = useContext(SystemContext);
	if (!context) {
		throw new Error('useSystemContext() must be wrapped in <SystemContextProvider/>');
	}
	return context;
};
