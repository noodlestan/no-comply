import { type Component, batch } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import type { ObjectWithId } from '../../../../types';
import { getListSelectionUntil, resolveListItemComponent } from '../../helpers';
import type { ListItemComponent, ListItemComponentProps, ListState } from '../../types';
import { ListDefaultItemComponent } from '../ListDefaultItemComponent';

import './ListItem.css';

type ListItemProps = {
    items: ObjectWithId[];
    item: ObjectWithId;
    state: ListState;
    disabled?: boolean;
    component?: ListItemComponent | undefined;
};

export const ListItem: Component<ListItemProps> = props => {
    const { getFirstSelected, isSelected, select, toggleSelected, clearSelection, setSelection } =
        // eslint-disable-next-line solid/reactivity
        props.state;

    const component = (cProps: ListItemComponentProps) => {
        return resolveListItemComponent(cProps, props.component, ListDefaultItemComponent);
    };

    const selectItem = () => {
        if (props.disabled) {
            return;
        }
        setSelection([props.item]);
    };

    const selectItemsUntil = () => {
        if (props.disabled) {
            return;
        }
        const firstSelected = getFirstSelected();
        if (firstSelected) {
            batch(() => {
                const items = getListSelectionUntil(props.items, firstSelected, props.item);
                clearSelection();
                select(firstSelected);
                items.forEach(object => select(object));
            });
        } else {
            selectItem();
        }
    };

    const toggleItemSelected = () => {
        if (props.disabled) {
            return;
        }
        toggleSelected(props.item);
    };

    const classList = () => ({
        ListItem: true,
        'ListItem-is-selected': isSelected(props.item.id),
    });

    const componentProps = () => ({
        state: props.state,
        listItem: props.item,
        isSelected: isSelected(props.item.id),
        onClick: selectItem,
        onShiftClick: selectItemsUntil,
        onAltClick: toggleItemSelected,
    });

    return (
        <div classList={classList()}>
            <Dynamic component={component(componentProps())} {...componentProps()} />
        </div>
    );
};
