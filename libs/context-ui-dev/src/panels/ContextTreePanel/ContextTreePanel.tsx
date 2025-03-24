import { Display, Flex, TreeList, createTreeState, useContextRoot } from '@noodlestan/ui-system';
import { type Component } from 'solid-js';

import { createDebugContextTree } from './functions';

export const ContextTreePanel: Component = () => {
    const root = useContextRoot();
    const tree = createDebugContextTree(root);
    const treeState = createTreeState();

    return (
        <Flex
            direction="column"
            padding="l"
            gap="m"
            role="region"
            aria-labelledby="context-tree-panel"
        >
            <Display level={4} id="context-tree-panel">
                Context
            </Display>
            <TreeList root={tree()} state={treeState} expand />
        </Flex>
    );
};
