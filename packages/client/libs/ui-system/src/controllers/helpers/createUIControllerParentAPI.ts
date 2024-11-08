import { batch, createSignal } from 'solid-js';

import {
    UIControllerChildAPI,
    UIControllerContainer,
    UIControllerName,
    UIControllerParentAPI,
    UIControllerParentImplementation,
    UIControllerParentPrivate,
} from '../types';

type UIControllerParentAPIState = {
    map: UIControllerParentImplementation;
};

export const createUIControllerParentAPI = <T extends UIControllerChildAPI = UIControllerChildAPI>(
    container: UIControllerContainer<T>,
): [UIControllerParentAPI<T>, UIControllerParentPrivate] => {
    const [getActiveChild, setActiveChild] = createSignal<T>();
    const [getOverridingChild, setOverridingChild] = createSignal<T>();

    const state: UIControllerParentAPIState = {
        map: {},
    };

    const childDidActivate = (child: UIControllerName) => {
        const activatingChild = container.getController(child);
        const activeChild = getActiveChild();
        if (activeChild && activeChild !== activatingChild) {
            activeChild.deactivate();
        }
        batch(() => {
            setOverridingChild();
            setActiveChild(() => activatingChild);
        });
    };

    const unsetActiveChild = () => {
        const overridingChildChild = getOverridingChild();
        if (overridingChildChild) {
            overridingChildChild.endOverriding();
        }
        const activeChild = getActiveChild();
        if (activeChild) {
            activeChild.deactivate();
        }
        batch(() => {
            setOverridingChild();
            setActiveChild();
        });
    };

    const childOverrideStarted = (child: UIControllerName) => {
        const overridingChild = container.getController(child);
        const currentOverride = getOverridingChild();
        if (currentOverride) {
            throw new Error(`Override is already set to "${child}".`);
        }
        const activeChild = getActiveChild();
        if (activeChild && activeChild === overridingChild) {
            throw new Error(`Current child is "${child}", can not override with same value.`);
        }
        if (activeChild) {
            activeChild.suspend();
        }
        setOverridingChild(() => overridingChild);
    };

    const childOverrideEnded = (child: UIControllerName) => {
        const overridingChild = container.getController(child);
        const currentOverride = getOverridingChild();
        if (!currentOverride) {
            throw new Error(`No override to unset.`);
        }
        if (currentOverride !== overridingChild) {
            throw new Error(`Current override is "${currentOverride.name}", expected "${child}".`);
        }
        setOverridingChild();
        const activeChild = getActiveChild();
        if (activeChild) {
            activeChild.resume();
        }
    };

    const api: UIControllerParentAPI<T> = {
        getActiveChild,
        getOverridingChild,
        childDidActivate,
        unsetActiveChild,
        childOverrideStarted,
        childOverrideEnded,
    };

    const setImplementation = (map: UIControllerParentImplementation) => {
        state.map = map;
    };

    const privateAPI: UIControllerParentPrivate = {
        setImplementation,
    };
    return [api, privateAPI];
};
