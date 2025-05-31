import { createAriaListItem } from '@no-comply/solid-accessibility';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';
import { batch } from 'solid-js';

import { getListSelectionUntil } from '../../helpers';
import { useList } from '../../providers';

import { $LIST_ITEM } from './constants';
import type { ListItemAPI, ListItemProps } from './types';

export const createListItem = (props: ListItemProps): ListItemAPI => {
    const [locals, expose] = createExposable($LIST_ITEM, props);

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

    const isSelected = () => isItemSelected(locals.item.id);

    const ariaComputedProps = computedProps({
        selected: isSelected,
    });
    const ariaProps = combineProps(locals, ariaComputedProps);
    const { $root: $listItemRoot, $label, $description } = createAriaListItem(ariaProps);

    const selectItem = () => {
        if (isDisabled()) {
            return;
        }
        setSelection([locals.item]);
    };

    const selectItemsUntil = () => {
        if (isDisabled()) {
            return;
        }
        const firstSelected = getFirstSelected();
        if (firstSelected) {
            batch(() => {
                const itemsToSelect = getListSelectionUntil(items(), firstSelected, locals.item);
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
        toggleSelected(locals.item);
    };

    const itemContentsStaticProps = {
        onClick: selectItem,
        onShiftClick: selectItemsUntil,
        onAltClick: toggleItemSelected,
    };

    const itemContentsProps = computedProps(itemContentsStaticProps, {
        component: () => components().itemContents,
        item: () => locals.item,
        selected: isSelected,
    });

    return exposeAPI(expose, '$root', {
        $root: $listItemRoot,
        $label,
        $description,
        itemContentsProps,
    });
};
