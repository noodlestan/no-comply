import { createSignal } from 'solid-js';

import { UIChildController, UIControllerName, UIParentController } from '../types';

export const createRootController = (): UIParentController => {
    const childMap: Record<UIControllerName, UIChildController> = {};

    const [getActiveChild, setActiveChild] = createSignal<UIControllerName>();

    const registerChildController = (name: UIControllerName, controller: UIChildController) => {
        if (name in childMap) {
            throw new Error(`Duplicate controller "${name}".`);
        }
        childMap[name] = controller;
    };

    const unregisterChildController = (name: UIControllerName) => {
        if (!(name in childMap)) {
            throw new Error(`Unknown controller "${name}".`);
        }
        delete childMap[name];
    };

    const childDidActivate = (name: UIControllerName) => {
        if (!(name in childMap)) {
            throw new Error(`Unknown controller "${name}".`);
        }
        setActiveChild(name);
        for (const key in childMap) {
            if (key !== name) {
                childMap[key].deactivate();
            }
        }
    };

    const api: UIParentController = {
        registerChildController,
        unregisterChildController,
        getActiveChild,
        childDidActivate,
    };

    return api;
};
