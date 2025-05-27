import { type ClosedTagProps } from '@noodlestan/context-ui-primitives';
import { type ParentComponent, mergeProps, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { DISPLAY_ALIGNED_PROPS } from './constants';
import { createDisplayAligned } from './createDisplayAligned';
import type { DisplayAlignedProps } from './types';

type Props = ClosedTagProps & DisplayAlignedProps;

export const DisplayAligned: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, DISPLAY_ALIGNED_PROPS);

    const { $root } = createDisplayAligned(locals);
    const $ = mergeProps($others, $root);

    return <Dynamic {...$} />;
};
