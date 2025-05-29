import { type Component, For } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createTreeListItemChildrenBase } from './createTreeListItemChildren';
import type { TreeListItemChildrenBaseProps } from './types';

export const TreeListItemChildrenBase: Component<TreeListItemChildrenBaseProps> = props => {
    const { $root, itemProps } = createTreeListItemChildrenBase(props);

    return (
        <div {...$root}>
            <For each={props.node.children}>
                {(child, index) => <Dynamic {...itemProps} node={child} posInSet={index() + 1} />}
            </For>
        </div>
    );
};
