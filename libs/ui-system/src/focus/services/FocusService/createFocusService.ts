import { FocusServiceAPI, FocusTargetId } from './types';

export const createFocusService = (): FocusServiceAPI => {
    let currentTarget: FocusTargetId | undefined;
    const targetMap = new Map<string, () => void>();

    const setTarget = (target: FocusTargetId, handler: () => void) => {
        targetMap.set(target.targetName, handler);
        if (currentTarget?.targetName === target.targetName) {
            currentTarget = undefined;
            handler();
        }
    };

    const setFocus = (target: FocusTargetId) => {
        const targetFn = targetMap.get(target.targetName);
        if (targetFn) {
            targetFn();
        } else {
            currentTarget = target;
        }
    };

    const unsetTarget = (target: FocusTargetId) => {
        targetMap.delete(target.targetName);
    };

    const dispose = () => {
        targetMap.clear();
    };

    const api: FocusServiceAPI = {
        setTarget,
        setFocus,
        unsetTarget,
        dispose,
    };

    return api;
};
