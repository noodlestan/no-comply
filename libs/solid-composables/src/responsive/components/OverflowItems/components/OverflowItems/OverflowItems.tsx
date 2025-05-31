import { type ClosedTagProps, type ObjectWithId, combineProps } from '@no-comply/solid-primitives';
import { type JSX, type ParentComponent, Show, splitProps } from 'solid-js';

import { OverflowItemsContextProvider, OverflowItemsMeasureProvider } from '../../private';

import { OVERFLOW_ITEMS_PROPS } from './constants';
import { createOverflowItems } from './createOverflowItems';
import type { OverflowItemsProps } from './types';

type Props<T extends ObjectWithId> = ClosedTagProps &
    OverflowItemsProps<T> & { children: JSX.Element };

export const OverflowItems = <T extends ObjectWithId>(
    props: Props<T>,
): ReturnType<ParentComponent<Props<T>>> => {
    const [locals, $others] = splitProps(props, [...OVERFLOW_ITEMS_PROPS, 'children']);

    const { $root, $measure, $render, context, contextValue } = createOverflowItems(
        locals as OverflowItemsProps<T>,
    );

    const $ = combineProps($others, $root);

    return (
        <OverflowItemsContextProvider context={contextValue}>
            <div {...$}>
                <div {...$measure}>
                    <OverflowItemsMeasureProvider>{props.children}</OverflowItemsMeasureProvider>
                </div>
                <div {...$render}>{props.children}</div>
            </div>
            <Show when={context.overflowItems().length}>
                {props.renderOverflow({ items: context.overflowItems() })}
            </Show>
        </OverflowItemsContextProvider>
    );
};
