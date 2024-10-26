import { Component } from 'solid-js';

import { TreeNodeComponentProps } from '../../types';

import './TreeListDefaultNodeComponent.css';

export const TreeListDefaultNodeComponent: Component<TreeNodeComponentProps> = props => {
    return (
        <div class="TreeListDefaultNodeComponent">
            <div class="TreeListDefaultNodeComponent--label">{props.node.id}</div>
        </div>
    );
};
