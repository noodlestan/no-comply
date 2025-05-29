import { createAriaRegion } from '@no-comply/solid-accessibility';
import { TreeListBase, type TreeListLabels, type TreeNode } from '@no-comply/solid-composables';
import { useContextTreeRoot } from '@no-comply/solid-contexts';
import { Display, ExpandButton, Flex } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { createDebugContextTree } from './functions';
import { DebugContextTreeItem } from './parts';

const TREE_LABELS: TreeListLabels = {
    collapsed: (n: TreeNode) => `Collapse context ${n.id}`,
    group: (n: TreeNode) => `Sub-contexts of ${n.id}`,
    expanded: (n: TreeNode) => `Expand context ${n.id}`,
    details: `Context details`,
    select: (n: TreeNode) => `Select context ${n.id}`,
    item: (n: TreeNode) => `Context ${n.id}`,
};

export const DebugContextTreePanel: Component = () => {
    const region = createAriaRegion();

    const components = { itemContents: DebugContextTreeItem, expandButton: ExpandButton };

    const rootContext = useContextTreeRoot();
    const tree = createDebugContextTree(rootContext);

    return (
        <Flex direction="column" gap="m" {...region.$root}>
            <Display level={4} {...region.$label}>
                Context Tree
            </Display>
            <TreeListBase root={tree()} expand={1} components={components} labels={TREE_LABELS} />
        </Flex>
    );
};
