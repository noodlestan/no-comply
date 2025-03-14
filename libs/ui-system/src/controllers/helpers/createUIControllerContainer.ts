import { ReactiveMap } from '@solid-primitives/map';

import { UIControllerChildAPI, UIControllerContainer, UIControllerName } from '../types';

export const createUIControllerContainer = <
    T extends UIControllerChildAPI = UIControllerChildAPI,
>(): UIControllerContainer<T> => {
    const childMap = new ReactiveMap<UIControllerName, T>();

    const getController = <C extends T = T>(name: UIControllerName): C => {
        if (!childMap.has(name)) {
            throw new Error(`Unknown controller "${name}".`);
        }
        return childMap.get(name) as C;
    };

    const addController = (name: UIControllerName, controller: T) => {
        if (childMap.has(name)) {
            throw new Error(`Duplicate controller "${name}".`);
        }
        childMap.set(name, controller);
    };

    const removeController = (name: UIControllerName) => {
        if (!childMap.has(name)) {
            throw new Error(`Unknown controller "${name}".`);
        }
        childMap.delete(name);
    };

    const api: UIControllerContainer<T> = {
        controllers: () => Array.from(childMap.values()),
        getController,
        addController,
        removeController,
    };

    return api;
};
