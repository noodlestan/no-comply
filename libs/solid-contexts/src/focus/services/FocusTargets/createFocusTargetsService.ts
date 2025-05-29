import type { FocusTargetName, FocusTargetsServiceAPI } from './types';

export const createFocusTargetsService = (): FocusTargetsServiceAPI => {
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

    const api: FocusTargetsServiceAPI = {
        setTarget,
        setFocus,
        unsetTarget,
        dispose,
    };

    return api;
};
