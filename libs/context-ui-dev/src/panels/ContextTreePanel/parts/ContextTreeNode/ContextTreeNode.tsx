import {
    type ContextNode,
    Display,
    Flex,
    type TreeItemComponentProps,
    createClassList,
} from '@noodlestan/context-ui';
import { type Component, For, Show } from 'solid-js';

import styles from './ContextTreeNode.module.css';

export const ContextTreeNode: Component<TreeItemComponentProps> = props => {
    const node = () => props.node.object as ContextNode;

    const classList = createClassList(styles, ['ContextTreeNode']);

    return (
        <Show when={props.node.object}>
            <Flex direction="row" align="center" gap="m" classList={classList()}>
                <Display level={4}>{node().id}</Display>
                <Flex tag="ul" direction="row" gap="m" wrap aria-label="Context Values">
                    <For each={node().values()}>
                        {item => (
                            <li>
                                {item.type}:{item.value}
                            </li>
                        )}
                    </For>
                </Flex>
            </Flex>
        </Show>
    );
};
