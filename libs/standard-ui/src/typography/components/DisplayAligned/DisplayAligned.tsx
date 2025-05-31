import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { DISPLAY_ALIGNED_PROPS } from './constants';
import { createDisplayAligned } from './createDisplayAligned';
import type { DisplayAlignedProps } from './types';

type Props = ClosedTagProps & DisplayAlignedProps;

export const DisplayAligned: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, DISPLAY_ALIGNED_PROPS);

    const { $root } = createDisplayAligned(locals);
    const $ = combineProps($others, $root);

    return <Dynamic {...$} />;
};
