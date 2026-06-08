import { useContext } from 'solid-js';

import type { FocusTargetsServiceAPI } from '../../services';

import { FocusTargetsCTX } from './private';

export const useFocusTargetContext = (): FocusTargetsServiceAPI => {
	const context = useContext(FocusTargetsCTX);
	if (!context) {
		throw new Error('useFocusTargetContext() must be wrapped in <FocusServiceProvider/>');
	}

	return context;
};
