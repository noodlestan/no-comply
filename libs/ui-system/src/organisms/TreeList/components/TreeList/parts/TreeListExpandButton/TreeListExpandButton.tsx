import type { Component } from 'solid-js';

import { ExpandButton } from '../../../../../../atoms';
import type { ClassList } from '../../../../../../dom';
import { l } from '../../../../../../labels';
import { useTreeListContext } from '../../../../providers';
import type { TreeNode } from '../../../../types';

export type TreeListExpandButtonProps = {
    node: TreeNode;
    isExpanded: boolean;
    onClick: (ev: Event) => void;
    classList?: ClassList;
};

export const TreeListExpandButton: Component<TreeListExpandButtonProps> = props => {
    const { labels, icons } = useTreeListContext();

    return (
        <ExpandButton
            size="xs"
            onClick={props.onClick}
            isExpanded={props.isExpanded}
            classList={props.classList}
            labels={{
                expand: l(labels.expand, props.node),
                collapse: l(labels.collapse, props.node),
            }}
            icons={icons}
        />
    );
};
