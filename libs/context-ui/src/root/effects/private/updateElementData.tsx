import type { RawDataAttributes } from '../../../dom';

const attributeName = (prefix: string | undefined, key: string): `data-${string}` => {
    return prefix ? `data-${prefix}-${key}` : `data-${key}`;
};

export type ElementPreviousData = [`data-${string}`, string][];

export const updateElementData = (
    targetElement?: HTMLElement,
    prefix?: string,
    data: RawDataAttributes = {},
    previousData?: ElementPreviousData,
): ElementPreviousData => {
    console.info('updateElementData()');

    if (!targetElement) {
        return [];
    }

    if (previousData) {
        previousData.forEach(([key]) => {
            if (!(key in data)) {
                targetElement.removeAttribute(key);
            }
        });
    }

    return Object.entries(data).map(([key, value]) => {
        const k = attributeName(prefix, key);
        const v = value !== undefined ? String(value) : '';
        targetElement.setAttribute(k, v);
        return [k, v];
    });
};
