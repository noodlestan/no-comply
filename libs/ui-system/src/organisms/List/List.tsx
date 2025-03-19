import { Component, For } from 'solid-js';

import { ObjectWithId } from '../../types';

import { ListItem } from './components';
import { createListKeyboardController } from './functions';
import { ListItemComponent, ListState } from './types';

import './List.css';

type ListProps = {
    items: ObjectWithId[];
    state: ListState;
    component?: ListItemComponent;
    disabled?: boolean;
    classList?: { [key: string]: boolean };
};

const ListItems: Component<{
    items: ObjectWithId[];
    state: ListState;
    disabled?: boolean;
    component?: ListItemComponent;
}> = props => {
    return (
        <For each={props.items}>
            {item => (
                <ListItem
                    items={props.items}
                    item={item}
                    state={props.state}
                    component={props.component}
                    disabled={props.disabled}
                />
            )}
        </For>
    );
};

export const List: Component<ListProps> = props => {
    let treeListRef: HTMLDivElement | undefined;

    const classList = () => ({
        ...props.classList,
        List: true,
    });

    const { handlers } = createListKeyboardController(() => treeListRef);

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div ref={treeListRef} classList={classList()} onKeyUp={handlers.onKeyDown}>
            <ListItems
                items={props.items}
                state={props.state}
                component={props.component}
                disabled={props.disabled}
            />
        </div>
    );
};
