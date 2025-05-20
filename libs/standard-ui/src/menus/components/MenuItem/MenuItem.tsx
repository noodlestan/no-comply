import { mergeProps } from '@noodlestan/context-ui-primitives';
import type { ClosedTagProps } from '@noodlestan/headless-ui';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { MENU_ITEM_PROPS } from './constants';
import { createMenuItem } from './createMenuItem';
import type { MenuItemProps } from './types';

type Props = ClosedTagProps & MenuItemProps;

export const MenuItem: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, MENU_ITEM_PROPS);

    const { $root } = createMenuItem(locals);
    const $ = mergeProps($others, $root);

    return <Dynamic {...$} />;
};
