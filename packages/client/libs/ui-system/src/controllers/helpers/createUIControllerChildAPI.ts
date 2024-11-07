import { batch, createSignal } from 'solid-js';

import { UIControllerChildAPI, UIControllerName, UIControllerParentAPI } from '../types';

export const createUIControllerChildAPI = (
    parent: UIControllerParentAPI,
    name: UIControllerName,
): UIControllerChildAPI => {
    const [isActive, setIsActive] = createSignal(false);
    const [isSuspended, setIsSuspended] = createSignal(false);

    const activate = () => {
        parent.childDidActivate(name);
        batch(() => {
            setIsActive(true);
            setIsSuspended(false);
        });
    };

    const deactivate = () => {
        batch(() => {
            setIsActive(false);
            setIsSuspended(false);
        });
    };

    const suspend = () => {
        setIsSuspended(true);
    };

    const resume = () => {
        setIsSuspended(false);
    };

    const api: UIControllerChildAPI = {
        name,
        isActive: () => isActive() && !isSuspended(),
        isSuspended,
        activate,
        deactivate,
        suspend,
        resume,
    };

    return api;
};
