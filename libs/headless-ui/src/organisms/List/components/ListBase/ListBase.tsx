import { mergeProps } from '@noodlestan/context-ui-primitives';
import { type Component, For, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import type { ClosedTagProps } from '../../../../tag';
import { ListContextProvider } from '../../providers';

import { LIST_BASE_PROPS } from './constants';
import { createListBase } from './createListBase';
import type { ListBaseProps } from './types';

type Props = ClosedTagProps & ListBaseProps;

export const ListBase: Component<Props> = props => {
    const [locals, $others] = splitProps(props, LIST_BASE_PROPS);

    const tree = createListBase(locals);
    const { $root, itemProps, contextValue } = tree;
    const $ = mergeProps($others, $root);

    return (
        <ListContextProvider context={contextValue}>
            <div {...$}>
                <For each={props.items}>
                    {(item, index) => <Dynamic {...itemProps} item={item} posInSet={index() + 1} />}
                </For>
            </div>
        </ListContextProvider>
    );
};
