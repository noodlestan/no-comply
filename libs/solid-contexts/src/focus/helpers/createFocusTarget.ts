import { useFocusTargetContext } from '../providers';
import type { FocusTargetName, FocusTargetProducerAPI } from '../types';

import { createFocusTargetAPI } from './private';

export const createFocusTarget = (target: FocusTargetName): FocusTargetProducerAPI => {
	const context = useFocusTargetContext();

	return createFocusTargetAPI(context, target);
};
