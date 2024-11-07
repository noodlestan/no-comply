import { batch, createSignal } from 'solid-js';

import { UIControllerChildAPI, UIControllerName, UIControllerParentAPI } from '../types';

export const createUIControllerChildAPI = (
    parent: UIControllerParentAPI,
    name: UIControllerName,
): UIControllerChildAPI => {
    const [isActive, setIsActive] = createSignal(false);
    const [isOverriding, setIsOverriding] = createSignal(false);
    const [isSuspended, setIsSuspended] = createSignal(false);

    const activate = () => {
        batch(() => {
            setIsActive(true);
            setIsSuspended(false);
        });
        parent.childDidActivate(name);
    };

    const deactivate = () => {
        batch(() => {
            setIsActive(false);
            setIsSuspended(false);
        });
    };

    const startOverriding = () => {
        if (!isActive() && !isOverriding() && !isSuspended()) {
            setIsOverriding(true);
            parent.childOverrideStarted(name);
        }
    };

    const endOverriding = () => {
        setIsOverriding(false);
        parent.childOverrideEnded(name);
    };

    const suspend = () => {
        setIsSuspended(true);
    };

    const resume = () => {
        setIsSuspended(false);
    };

    const api: UIControllerChildAPI = {
        name,
        isActive: () => isOverriding() || (isActive() && !isSuspended()),
        isOverriding,
        isSuspended,
        activate,
        deactivate,
        startOverriding,
        endOverriding,
        suspend,
        resume,
    };

    return api;
};
