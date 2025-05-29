import { createAriaListItem } from '@no-comply/solid-accessibility';
import { createComputedProps, mergeProps } from '@no-comply/solid-primitives';
import { batch } from 'solid-js';

import { getListSelectionUntil } from '../../helpers';
import { useList } from '../../providers';

import type { ListItemAPI, ListItemProps } from './types';

export const createListItem = (props: ListItemProps): ListItemAPI => {
    const {
        components,
        items,
        isDisabled,
        getFirstSelected,
        isItemSelected,
        select,
        toggleSelected,
        clearSelection,
        setSelection,
    } = useList();

    const isSelected = () => isItemSelected(props.item.id);

    const ariaComputedProps = createComputedProps({
        selected: isSelected,
    });
    const ariaProps = mergeProps(props, ariaComputedProps);
    const { $root: $ariaListItemRoot, $label, $description } = createAriaListItem(ariaProps);

    const selectItem = () => {
        if (isDisabled()) {
            return;
        }
        setSelection([props.item]);
    };

    const selectItemsUntil = () => {
        if (isDisabled()) {
            return;
        }
        const firstSelected = getFirstSelected();
        if (firstSelected) {
            batch(() => {
                const itemsToSelect = getListSelectionUntil(items(), firstSelected, props.item);
                clearSelection();
                select(firstSelected);
                itemsToSelect.forEach(object => select(object));
            });
        } else {
            selectItem();
        }
    };

    const toggleItemSelected = () => {
        if (isDisabled()) {
            return;
        }
        toggleSelected(props.item);
    };

    const itemContentsStaticProps = {
        onClick: selectItem,
        onShiftClick: selectItemsUntil,
        onAltClick: toggleItemSelected,
    };

    const itemContentsProps = createComputedProps(itemContentsStaticProps, {
        component: () => components().itemContents,
        item: () => props.item,
        selected: isSelected,
    });

    return {
        $root: $ariaListItemRoot,
        $label,
        $description,
        itemContentsProps,
    };
};
