import { type AnyProps, combineProps } from '@no-comply/solid-primitives';
import { onCleanup } from 'solid-js';

import type { ExposableAPI } from '../../private';
import type { ExposedAPI } from '../../types';

import { useExposeService } from './useExposeService';

export const exposeAPI = <T extends Record<string, unknown>>(
    exposable: ExposableAPI | undefined,
    keys: string[] | string | undefined,
    api: ExposedAPI<T>,
): T => {
    if (!exposable) {
        return api;
    }

    const expose = useExposeService();
    const { id: _id, name, parent } = exposable;
    const data = {
        'data-xp': name,
        'data-xp-id': _id,
    };

    const overrides = {} as Record<string, AnyProps>;
    const exposedKeys = Array.isArray(keys) ? keys : keys !== undefined ? [keys] : [];
    for (const key of exposedKeys) {
        if (!(key in api)) {
            const detail = `Exposed keys: "${Object.keys(api)}".`;
            console.error(`Api does not expose "${key}". ${detail}`);
            continue;
        }
        const exposedData = parent ? { ...data, 'data-xp-parent': parent } : data;
        overrides[key] = combineProps(api[key] as AnyProps, exposedData);
    }

    const exposedApi = {
        ...api,
        ...overrides,
        _id,
    } as T;

    expose.track(exposable, exposedApi);
    onCleanup(() => expose.untrack(exposable));

    return exposedApi;
};
