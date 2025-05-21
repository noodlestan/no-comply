import { type ClosedTagProps, mergeProps } from '@noodlestan/context-ui-primitives';
import { type Component, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { LIST_ITEM_BASE_PROPS } from './constants';
import { createListItemBase } from './createListItemBase';
import type { ListItemBaseProps } from './types';

type Props = ClosedTagProps & ListItemBaseProps;

export const ListItemBase: Component<Props> = props => {
    const [locals, $others] = splitProps(props, LIST_ITEM_BASE_PROPS);

    const { $root, itemContentsProps } = createListItemBase(locals);
    const $ = mergeProps($others, $root);

    return (
        <div {...$}>
            <Dynamic {...itemContentsProps} />
        </div>
    );
};
