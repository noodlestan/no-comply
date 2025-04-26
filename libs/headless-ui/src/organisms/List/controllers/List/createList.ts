import { createAriaList } from '@noodlestan/context-ui-aria';
import { createComputedProps, mergeProps, withDefault } from '@noodlestan/context-ui-primitives';

import { createListKeyboardController } from '..';
import { createListContext } from '../../contexts';

import type { ListAPI, ListProps } from './types';

export const createList = (props: ListProps): ListAPI => {
    const contextValue = createListContext(props);
    const [context] = contextValue;
    const { components } = context;

    const keyboard = withDefault(
        () => props.keyboard,
        () => createListKeyboardController(),
    );

    const { $root: $ariaTreeRoot, $label, $description } = createAriaList(props);

    const $static = {
        ref: (el: HTMLElement) => keyboard().$root.ref(el),
        onKeyDown: (ev: KeyboardEvent) => keyboard().$root.onKeyDown(ev),
    };
    const $localRoot = createComputedProps($static, {});

    const itemProps = createComputedProps({
        component: () => components().item,
        setSize: () => props.items.length,
    });

    return {
        $root: mergeProps($ariaTreeRoot, $localRoot),
        $label,
        $description,
        itemProps,
        context,
        contextValue,
    };
};
