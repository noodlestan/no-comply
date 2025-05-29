import { type ClosedTagProps, mergeProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { DISPLAY_PROPS } from './constants';
import { createDisplay } from './createDisplay';
import type { DisplayProps } from './types';

type Props = ClosedTagProps & DisplayProps;

export const Display: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, DISPLAY_PROPS);

    const { $root } = createDisplay(locals);
    const $ = mergeProps($others, $root);

    return <Dynamic {...$} />;
};
