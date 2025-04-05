import { type ContextNode } from '@noodlestan/context-ui';
import { staticClassList } from '@noodlestan/context-ui-types';
import type { TreeItemComponentProps } from '@noodlestan/headless-ui';
import { type Component, For, Show } from 'solid-js';

import { Display, Flex } from '../../../../private';

import styles from './ContextTreeNode.module.css';

export const ContextTreeNode: Component<TreeItemComponentProps> = props => {
    const node = () => props.node.object as ContextNode;

    return (
        <Show when={props.node.object}>
            <Flex
                direction="row"
                align="center"
                gap="m"
                classList={staticClassList(styles, 'ContextTreeNode')}
            >
                <Display level={4}>{node().id}</Display>
                <Flex component="ul" direction="row" gap="m" wrap aria-label="Context Values">
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
