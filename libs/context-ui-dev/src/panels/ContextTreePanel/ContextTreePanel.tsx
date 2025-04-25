import { useContextTreeRoot } from '@noodlestan/context-ui';
import { createAriaRegion } from '@noodlestan/context-ui-aria';
import {
    TreeListBase,
    type TreeListLabels,
    type TreeNode,
    createTreeListContext,
} from '@noodlestan/headless-ui';
import { type Component } from 'solid-js';

import { Display, Flex } from '../../private';

import { createDebugContextTree } from './functions';
import { ContextTreeNode } from './parts';

const TREE_LABELS: TreeListLabels = {
    collapse: (n: TreeNode) => `Collapse context ${n.id}`,
    group: (n: TreeNode) => `Sub-contexts of ${n.id}`,
    expand: (n: TreeNode) => `Expand context ${n.id}`,
    details: `Context details`,
    select: (n: TreeNode) => `Select context ${n.id}`,
    item: (n: TreeNode) => `Context ${n.id}`,
};

export const ContextTreePanel: Component = () => {
    const region = createAriaRegion();

    const rootContext = useContextTreeRoot();
    const treeRoot = createDebugContextTree(rootContext);
    const tree = createTreeListContext(treeRoot, {
        components: { treeItem: ContextTreeNode, expandButton: ExpandButton },
        expand: 1,
        labels: TREE_LABELS,
    });

    return (
        <Flex direction="column" gap="m" {...region.elProps}>
            <Display level={4} {...region.labelProps}>
                Context Tree
            </Display>
            <TreeListBase tree={tree} />
        </Flex>
    );
};
