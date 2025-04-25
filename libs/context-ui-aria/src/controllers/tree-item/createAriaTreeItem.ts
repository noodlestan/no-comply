import { createComputedProps } from '@noodlestan/context-ui-primitives';

import { createAriaRegion } from '../region';

import type { AriaTreeItemAPI, AriaTreeItemProps } from './types';

export const createAriaTreeItem = (props: AriaTreeItemProps): AriaTreeItemAPI => {
    const {
        elProps: regionProps,
        labelProps,
        descriptionProps,
    } = createAriaRegion(props, 'treeitem');

    const elProps = createComputedProps(regionProps, {
        'aria-expanded': () => props.expanded,
        'aria-selected': () => props.selected,
        'aria-level': () => props.level,
        'aria-setsize': () => props.setSize,
        'aria-posinset': () => props.posInSet,
    });

    return {
        elProps,
        labelProps,
        descriptionProps,
    };
};
