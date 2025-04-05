import { createComputedProps } from '@noodlestan/context-ui-types';

import { createAriaRegion } from '../region';

import type { AriaTreeItemAPI, AriaTreeItemProps } from './types';

export const createAriaTreeItem = (props: AriaTreeItemProps): AriaTreeItemAPI => {
    const { elProps: regionProps, labelProps } = createAriaRegion(props, 'treeitem');

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
    };
};
