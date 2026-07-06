import type { FocusTargetConsumerAPI, FocusTargetName } from '../../types';

import { useFocusTargetContext } from './useFocusTargetContext';

export const useFocusTargetConsumer = (target: FocusTargetName): FocusTargetConsumerAPI => {
	const context = useFocusTargetContext();
	if (!context) {
		throw new Error('useFocus() must be wrapped in <FocusServiceProvider/>');
	}

	const setFocus = () => context.setFocus(target);

	return [setFocus];
};
