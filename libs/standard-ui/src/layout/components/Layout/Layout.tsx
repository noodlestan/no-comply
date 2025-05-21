import { type ClosedTagProps, mergeProps } from '@noodlestan/context-ui-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { LAYOUT_PROPS } from './constants';
import { createLayout } from './createLayout';
import type { LayoutProps } from './types';

type Props = ClosedTagProps & LayoutProps;

export const Layout: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, LAYOUT_PROPS);

    const { $root } = createLayout(locals);
    const $ = mergeProps($others, $root);

    return <Dynamic {...$} />;
};
