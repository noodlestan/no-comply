import type { JSX } from 'solid-js';

import type { DemoItemData } from '../types';

export const createDemoItem = (
    data: Omit<DemoItemData, 'type' | 'content'>,
    content: () => JSX.Element,
): DemoItemData => {
    return {
        ...data,
        type: 'item',
        content,
    };
};
