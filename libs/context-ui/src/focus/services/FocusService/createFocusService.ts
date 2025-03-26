import type { FocusServiceAPI, FocusTargetName } from './types';

export const createFocusService = (): FocusServiceAPI => {
    let currentTarget: FocusTargetName | undefined;
    const targetMap = new Map<string, () => void>();

    const setTarget = (target: FocusTargetName, handler: () => void) => {
        targetMap.set(target.targetName, handler);
        if (currentTarget?.targetName === target.targetName) {
            currentTarget = undefined;
            handler();
        }
    };

    const setFocus = (target: FocusTargetName) => {
        const targetFn = targetMap.get(target.targetName);
        if (targetFn) {
            targetFn();
        } else {
            currentTarget = target;
        }
    };

    const unsetTarget = (target: FocusTargetName) => {
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
