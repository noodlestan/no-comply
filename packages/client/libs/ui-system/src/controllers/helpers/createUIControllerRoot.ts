import { UIControllerChildAPI, UIControllerContainer, UIControllerParent } from '../types';

import { createUIControllerParentAPI } from './createUIControllerParentAPI';

export const createUIControllerRoot = <T extends UIControllerChildAPI = UIControllerChildAPI>(
    container: UIControllerContainer<T>,
): UIControllerParent<T> => {
    const [controllerParentAPI] = createUIControllerParentAPI<T>(container);

    const api: UIControllerParent<T> = {
        ...controllerParentAPI,
        container,
    };

    return api;
};
