import type { ContextId } from '../../context';
import { type FocusTargetName } from '../types';

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
