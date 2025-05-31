import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { SCROLLABLE_PROPS } from './constants';
import { createScrollable } from './createScrollable';
import type { ScrollableProps } from './types';

type Props = ClosedTagProps & ScrollableProps;

export const Scrollable: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, SCROLLABLE_PROPS);

    const { $root } = createScrollable(locals);
    const $ = combineProps($others, $root);

    return <Dynamic {...$} />;
};
