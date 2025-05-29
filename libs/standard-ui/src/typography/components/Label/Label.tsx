import { type ClosedTagProps, mergeProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { LABEL_PROPS } from './constants';
import { createLabel } from './createLabel';
import type { LabelProps } from './types';

type Props = ClosedTagProps & LabelProps;

export const Label: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, LABEL_PROPS);

    const { $root } = createLabel(locals);
    const $ = mergeProps($others, $root);

    return <Dynamic {...$} />;
};
