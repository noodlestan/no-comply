import { createAriaGroup } from '@no-comply/solid-accessibility';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { l } from '@no-comply/solid-contexts/src/labels';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { useTreeList } from '../../providers';

import { $TREE_LIST_ITEM_CHILDREN } from './constants';
import type { TreeListItemChildrenAPI, TreeListItemChildrenProps } from './types';

export const createTreeListItemChildren = (
    props: TreeListItemChildrenProps,
): TreeListItemChildrenAPI => {
    const [locals, expose] = createExposable($TREE_LIST_ITEM_CHILDREN, props);

    const { components, labels, isExpanded } = useTreeList();

    const expanded = () => Boolean(locals.expand || isExpanded(locals.node.id));
    const setSize = () => locals.node.children.length;
    const ariaTreeGroupProps = computedProps({
        label: () => l(labels().group, locals.node),
        expanded,
        setSize,
    });
    const { $root: $groupRoot } = createAriaGroup(ariaTreeGroupProps);

    const $root = computedProps({
        id: () => `tree-list-node-${locals.node.id}`,
        style: () => ({ '--tree-list-indent-level': locals.level + 1 }),
    });

    const _treeListItem = computedProps({
        component: () => components().item,
        level: () => locals.level + 1,
        setSize: () => locals.node.children.length,
        parent: () => locals.parent,
        parentSelected: () => locals.parentSelected,
        expand: () => locals.expand,
    });

    return exposeAPI(expose, '$root', {
        $root: combineProps($groupRoot, $root),
        _treeListItem,
    });
};
