import type { ObjectWithId } from '@noodlestan/context-ui-primitives';

export const getListSelectionUntil = (
    items: ObjectWithId[],
    fromItem: ObjectWithId,
    untilItem: ObjectWithId,
): ObjectWithId[] => {
    let firstSelectedIndex = -1;
    let untilSelectedIndex = -1;
    for (let ix = 0; ix < items.length; ix++) {
        if (firstSelectedIndex === -1 && items[ix]?.id === fromItem.id) {
            firstSelectedIndex = ix;
        }
        if (untilSelectedIndex === -1 && items[ix]?.id === untilItem.id) {
            untilSelectedIndex = ix;
        }
    }

    if (firstSelectedIndex < untilSelectedIndex) {
        return items.slice(firstSelectedIndex, untilSelectedIndex + 1);
    }

    if (firstSelectedIndex > untilSelectedIndex) {
        return items.slice(untilSelectedIndex, firstSelectedIndex + 1);
    }

    return [untilItem];
};
