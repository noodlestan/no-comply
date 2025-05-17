import { useOverflowItems, useOverflowItemsMeasureMaybe } from '../../private';

import type { OverflowItemsToggleAPI } from './types';

export const createOverflowItemsToggle = (): OverflowItemsToggleAPI => {
    const [{ overflowItems }, { renderToggle, testOverflowItems }] = useOverflowItems();
    const isMeasure = useOverflowItemsMeasureMaybe();

    const count = () => (isMeasure ? testOverflowItems().length : overflowItems().length);

    return {
        renderToggle,
        count,
    };
};
