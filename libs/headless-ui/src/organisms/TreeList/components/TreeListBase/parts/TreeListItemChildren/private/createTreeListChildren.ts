import { l } from '@noodlestan/context-ui/src/labels';
import { createAriaGroup } from '@noodlestan/context-ui-aria';
import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';

import { useTreeListContext } from '../../../../../providers';

import type { TreeListChildrenAPI, TreeListChildrenProps } from './types';

export const createTreeListChildren = (props: TreeListChildrenProps): TreeListChildrenAPI => {
    const { state, labels } = useTreeListContext();

    const expanded = () => Boolean(props.expand || state.isExpanded(props.node.id));
    const setSize = () => props.node.children?.length ?? 0;

    const staticProps = {
        label: l(labels.group, props.node),
    };

    const ariaTreeGroupProps = createComputedProps(staticProps, {
        'aria-expanded': expanded,
        'aria-setsize': setSize,
    });
    const ariaTreeGroup = createAriaGroup(ariaTreeGroupProps);

    const elProps = createComputedProps({
        style: () => ({ '--tree-list-indent-level': props.level + 1 }),
    });

    return {
        elProps: mergeProps(ariaTreeGroup.elProps, elProps),
    };
};
