import { type Component, For } from 'solid-js';

import type { ClassList } from '../../dom';
import { Tag } from '../../layouts';
import type { ObjectWithId } from '../../types';

import { ListItem } from './components';
import { createListKeyboardController } from './functions';
import type { ListItemComponent, ListState } from './types';

import './List.css';

type ListProps = {
    items: ObjectWithId[];
    state: ListState;
    component?: ListItemComponent;
    disabled?: boolean;
    classList?: ClassList;
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
    let listRef: HTMLDivElement | undefined;

    const classList = () => ({
        ...props.classList,
        List: true,
    });

    const { handlers } = createListKeyboardController(() => listRef);

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <Tag ref={listRef} classList={classList()} onKeyUp={handlers.onKeyDown}>
            <ListItems
                items={props.items}
                state={props.state}
                component={props.component}
                disabled={props.disabled}
            />
        </Tag>
    );
};
