import {
    type ContextNode,
    Display,
    Flex,
    type TreeNodeComponentProps,
} from '@noodlestan/ui-system';
import { type Component, For, Show } from 'solid-js';

export const ContextTreeNode: Component<TreeNodeComponentProps> = props => {
    const node = () => props.node.object as ContextNode;

    return (
        <Show when={props.node.object}>
            <Flex direction="row" justify="between">
                <Display level={4}>{node().id}</Display>
                <Flex gap="xs" wrap>
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
