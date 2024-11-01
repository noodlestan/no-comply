import { resolveElements } from '@solid-primitives/refs';
import { Component, For, Show } from 'solid-js';

import { TransitionAPI } from '../../transitions';
import { ObjectWithId } from '../../types';

import { ListItem } from './components';
import { createListKeyboardController } from './functions';
import { createListTransitionController } from './functions/createListTransitionController';
import { ListItemComponent, ListState } from './types';

import './List.css';

type ListProps = {
    items: ObjectWithId[];
    state: ListState;
    component?: ListItemComponent;
    enter?: () => TransitionAPI;
    leave?: () => TransitionAPI;
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
            <Show when={!props.enter && !props.leave}>
                <ListItems
                    items={props.items}
                    state={props.state}
                    component={props.component}
                    disabled={props.disabled}
                />
            </Show>
            <Show when={props.enter || props.leave}>
                {(() => {
                    const resolved = resolveElements(() => (
                        <ListItems
                            items={props.items}
                            state={props.state}
                            disabled={props.disabled}
                            component={props.component}
                        />
                    ));
                    const transition = createListTransitionController(
                        resolved.toArray,
                        props.enter,
                        props.leave,
                    );
                    return <>{transition.items()}</>;
                })()}
            </Show>
        </div>
    );
};
