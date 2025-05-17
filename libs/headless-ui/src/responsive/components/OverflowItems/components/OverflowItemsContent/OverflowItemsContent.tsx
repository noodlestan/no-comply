import { type Component, For } from 'solid-js';

import { createOverflowItemsContent } from './createOverflowItemsContent';

export const OverflowItemsContent: Component = () => {
    const { items, isCurrent, renderItem } = createOverflowItemsContent();

    return <For each={items()}>{item => renderItem({ item, isCurrent: isCurrent(item.id) })}</For>;
};
