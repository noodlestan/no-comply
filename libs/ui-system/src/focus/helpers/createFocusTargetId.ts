import type { ContextId } from '../../context/private';
import { type FocusTargetId } from '../services';

export const createFocusTargetId = (
    name: string,
    parent?: FocusTargetId | ContextId,
): FocusTargetId => {
    if (parent) {
        const parentName = 'targetName' in parent ? parent.targetName : parent.ctxId;
        return { targetName: parentName + '.' + name };
    }
    return { targetName: name };
};
