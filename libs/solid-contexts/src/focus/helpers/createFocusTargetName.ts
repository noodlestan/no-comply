import type { ContextId } from '../../context/private';
import { type FocusTargetName } from '../services';

export const createFocusTargetName = (
	name: string,
	parent?: FocusTargetName | ContextId,
): FocusTargetName => {
	if (parent) {
		const parentName = 'targetName' in parent ? parent.targetName : parent.ctxId;
		return { targetName: parentName + '.' + name };
	}
	return { targetName: name };
};
