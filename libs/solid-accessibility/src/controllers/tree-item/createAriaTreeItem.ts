import { createComputedProps, mergeProps } from '@no-comply/solid-primitives';

import { createAriaRegion } from '../region';

import type { AriaTreeItemAPI, AriaTreeItemProps } from './types';

export const createAriaTreeItem = (props: AriaTreeItemProps): AriaTreeItemAPI => {
    const { $root: $regionRoot, $label, $description } = createAriaRegion(props, 'treeitem');

    const $localRoot = createComputedProps({
        'aria-expanded': () => props.expanded,
        'aria-selected': () => props.selected,
        'aria-level': () => props.level,
        'aria-setsize': () => props.setSize,
        'aria-posinset': () => props.posInSet,
    });

    return {
        $root: mergeProps($regionRoot, $localRoot),
        $label,
        $description,
    };
};
