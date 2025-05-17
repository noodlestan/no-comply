import { type ObjectWithId } from '@noodlestan/context-ui-primitives';
import { batch, createSignal } from 'solid-js';

import type {
    ItemProps,
    OverflowItemsContext,
    OverflowItemsContextOptions,
    OverflowItemsContextOwnerAPI,
    OverflowItemsContextValue,
} from './types';

export const createOverflowItemsContext = <T extends ObjectWithId = ObjectWithId>(
    options: OverflowItemsContextOptions<T>,
): OverflowItemsContextValue => {
    const [isReflowing, setIsReflowing] = createSignal(false);
    const [visibleItems, setVisibleItems] = createSignal<ObjectWithId[]>(options.items);
    const [overflowItems, setOverflowItems] = createSignal<ObjectWithId[]>([]);
    const [testVisibleItems, setTestVisibleItems] = createSignal<ObjectWithId[]>([]);
    const [testOverflowItems, setTestOverflowItems] = createSignal<ObjectWithId[]>([]);

    const context: OverflowItemsContext = {
        type: 'responsive-items',
        items: () => options.items,
        current: () => undefined,
        visibleItems,
        overflowItems,
        isReflowing,
    };

    const startTest = () => {
        batch(() => {
            setIsReflowing(true);
            setTestVisibleItems(options.items);
            setTestOverflowItems([]);
        });
    };

    const finishTest = () => {
        batch(() => {
            setIsReflowing(false);
            setVisibleItems(testVisibleItems());
            setOverflowItems(testOverflowItems());
        });
    };

    const nextTest = () => {
        const visible = [...testVisibleItems()];
        const overflow = [...testOverflowItems()];
        const popped = visible.pop();
        if (!popped) {
            finishTest();
            return false;
        }

        overflow.unshift(popped);
        batch(() => {
            setTestVisibleItems(visible);
            setTestOverflowItems(overflow);
        });
        return true;
    };

    const ownerAPI: OverflowItemsContextOwnerAPI = {
        renderItem: props => options.renderItem(props as ItemProps<T>),
        renderToggle: props => options.renderToggle(props),
        testVisibleItems,
        testOverflowItems,
        startTest,
        nextTest,
        finishTest,
    };

    return [context, ownerAPI];
};
