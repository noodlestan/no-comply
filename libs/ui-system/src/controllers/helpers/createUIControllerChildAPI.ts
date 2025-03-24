import { batch, createSignal } from 'solid-js';

import type {
    UIControllerChildAPI,
    UIControllerChildImplementation,
    UIControllerChildPrivate,
    UIControllerName,
    UIControllerParentAPI,
} from '../types';

type UIControllerChildAPIState = {
    map: UIControllerChildImplementation;
};

export const createUIControllerChildAPI = (
    parent: UIControllerParentAPI,
    name: UIControllerName,
): [UIControllerChildAPI, UIControllerChildPrivate] => {
    const [isActive, setIsActive] = createSignal(false);
    const [isOverriding, setIsOverriding] = createSignal(false);
    const [isSuspended, setIsSuspended] = createSignal(false);

    const state: UIControllerChildAPIState = {
        map: {},
    };

    const activate = () => {
        state.map.onActivate?.();
        batch(() => {
            setIsActive(true);
            setIsSuspended(false);
        });
        parent.childDidActivate(name);
    };

    const deactivate = () => {
        state.map.onDeactivate?.();
        batch(() => {
            setIsActive(false);
            setIsSuspended(false);
        });
    };

    const startOverriding = () => {
        if (!isActive() && !isOverriding() && !isSuspended()) {
            state.map.onStartOverriding?.();
            setIsOverriding(true);
            parent.childOverrideStarted(name);
        }
    };

    const endOverriding = () => {
        if (isOverriding()) {
            state.map.onEndOverriding?.();
            setIsOverriding(false);
            parent.childOverrideEnded(name);
        }
    };

    const suspend = () => {
        state.map.onSuspend?.();
        setIsSuspended(true);
    };

    const resume = () => {
        state.map.onResume?.();
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

    const setImplementation = (map: UIControllerChildImplementation) => {
        state.map = map;
    };

    const privateAPI: UIControllerChildPrivate = {
        setImplementation,
    };

    return [api, privateAPI];
};
