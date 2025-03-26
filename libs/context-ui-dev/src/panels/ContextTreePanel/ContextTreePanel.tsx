import {
    Display,
    Flex,
    TreeList,
    type TreeListLabels,
    type TreeNode,
    createAriaRegion,
    createTreeListContext,
    useContextRoot,
} from '@noodlestan/ui-system';
import { type Component } from 'solid-js';

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

    const rootContext = useContextRoot();
    const treeRoot = createDebugContextTree(rootContext);
    const tree = createTreeListContext(treeRoot, {
        component: ContextTreeNode,
        expand: 1,
        labels: TREE_LABELS,
    });

    return (
        <Flex direction="column" gap="m" {...region.elProps}>
            <Display level={4} {...region.labelProps}>
                Context Tree
            </Display>
            <TreeList tree={tree} />
        </Flex>
    );
};
