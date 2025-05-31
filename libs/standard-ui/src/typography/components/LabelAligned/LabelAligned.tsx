import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { LABEL_ALIGNED_PROPS } from './constants';
import { createLabelAligned } from './createLabelAligned';
import type { LabelAlignedProps } from './types';

type Props = ClosedTagProps & LabelAlignedProps;

export const LabelAligned: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, LABEL_ALIGNED_PROPS);

    const { $root } = createLabelAligned(locals);
    const $ = combineProps($others, $root);

    return <Dynamic {...$} />;
};
