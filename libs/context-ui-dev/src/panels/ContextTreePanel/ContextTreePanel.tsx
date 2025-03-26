import {
    Display,
    Flex,
    TreeList,
    type TreeListIcons,
    type TreeListLabels,
    type TreeNode,
    createAriaRegion,
    createIconValue,
    createTreeListContext,
    useContextRoot,
} from '@noodlestan/ui-system';
import { FileSpreadsheetIcon, ShieldCloseIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { createDebugContextTree } from './functions';
import { ContextTreeNode } from './parts';

const TREE_LABELS: TreeListLabels = {
    collapse: (n: TreeNode) => `Collapse context ${n.id}`,
    expand: (n: TreeNode) => `Expand context ${n.id}`,
    details: `Context details`,
    select: (n: TreeNode) => `Select context ${n.id}`,
    item: (n: TreeNode) => `Context ${n.id}`,
};

const TREE_ICONS: TreeListIcons = {
    collapsed: createIconValue(ShieldCloseIcon),
    expanded: createIconValue(FileSpreadsheetIcon),
};

export const ContextTreePanel: Component = () => {
    const region = createAriaRegion();

    const rootContext = useContextRoot();
    const treeRoot = createDebugContextTree(rootContext);
    const tree = createTreeListContext(treeRoot, {
        component: ContextTreeNode,
        expand: 2,
        labels: TREE_LABELS,
        icons: TREE_ICONS,
    });

    return (
        <Flex direction="column" padding="l" gap="m" {...region.elProps}>
            <Display level={4} {...region.labelProps}>
                Context Tree
            </Display>
            <TreeList tree={tree} />
        </Flex>
    );
};
