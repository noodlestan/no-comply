import { FocusServiceAPI, FocusTarget } from './types';

export const createFocusService = (): FocusServiceAPI => {
    let currentTarget: FocusTarget | undefined;
    const targetMap = new Map<string, () => void>();

    const setTarget = (target: FocusTarget, handler: () => void) => {
        targetMap.set(target.targetName, handler);
        if (currentTarget?.targetName === target.targetName) {
            handler();
            currentTarget = undefined;
        }
    };

    const setFocus = (target: FocusTarget) => {
        const targetFn = targetMap.get(target.targetName);
        if (targetFn) {
            targetFn();
        } else {
            currentTarget = target;
        }
    };

    const unsetTarget = (target: FocusTarget) => {
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
