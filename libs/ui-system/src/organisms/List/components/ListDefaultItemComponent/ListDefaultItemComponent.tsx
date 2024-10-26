import { Component } from 'solid-js';

import { ListItemComponentProps } from '../../types';

import './ListDefaultItemComponent.css';

export const ListDefaultItemComponent: Component<ListItemComponentProps> = props => {
    return (
        <div class="ListDefaultItemComponent">
            <div class="ListDefaultItemComponent--label">{props.listItem.id}</div>
        </div>
    );
};
