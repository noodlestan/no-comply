import { ReactiveMap } from '@solid-primitives/map';

import type { ExposableAPI } from '../../private';
import type { ExposedAPI } from '../../types';

import type { ExposeServiceAPI, ExposeServiceOptions, ExposedItem } from './types';

export const createExposesService = (options: ExposeServiceOptions): ExposeServiceAPI => {
    const instances = new ReactiveMap<string, ExposedItem>();

    const isExposeOn = () => options.expose;

    const track = (exposable: ExposableAPI, api: ExposedAPI) => {
        instances.set(exposable.id as string, [exposable, api]);
    };

    const untrack = (exposable: ExposableAPI) => {
        instances.delete(exposable.id as string);
    };

    const list = () => Array.from(instances.values());

    const byId = (id: string): ExposedItem | undefined => {
        return Array.from(instances.values()).find(([exposable]) => exposable.id === id);
    };

    // eslint-disable-next-line dot-notation
    (window as unknown as Record<string, unknown>)['_list'] = list;
    // eslint-disable-next-line dot-notation
    (window as unknown as Record<string, unknown>)['_byId'] = byId;

    return {
        isExposeOn,
        track,
        untrack,
        list,
        byId,
    };
};
