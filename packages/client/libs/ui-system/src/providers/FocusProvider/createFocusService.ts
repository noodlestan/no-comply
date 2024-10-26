import { FocusServiceAPI, FocusTarget } from './types';

export const createFocusService = (): FocusServiceAPI => {
    const targetMap = new Map<string, () => void>();

    const setTarget = (target: FocusTarget, handler: () => void) => {
        targetMap.set(target.targetName, handler);
    };

    const setFocus = (target: FocusTarget) => {
        targetMap.get(target.targetName)?.();
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
