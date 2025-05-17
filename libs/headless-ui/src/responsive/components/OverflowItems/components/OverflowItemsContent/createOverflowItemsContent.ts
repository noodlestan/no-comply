import { useOverflowItems, useOverflowItemsMeasureMaybe } from '../../private';

import type { OverflowItemsContentAPI } from './types';

export const createOverflowItemsContent = (): OverflowItemsContentAPI => {
    const [{ visibleItems }, { renderItem, testVisibleItems }] = useOverflowItems();
    const isMeasure = useOverflowItemsMeasureMaybe();

    return {
        renderItem,
        items: () => (isMeasure ? testVisibleItems() : visibleItems()),
        isCurrent: () => false,
    };
};
