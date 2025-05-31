import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';

import { FIELD_LABEL_PROPS } from './constants';
import { createFieldLabel } from './createFieldLabel';
import type { FieldLabelProps } from './types';

export type Props = ClosedTagProps & FieldLabelProps;

export const FieldLabel: ParentComponent<FieldLabelProps> = props => {
    const [locals, $others] = splitProps(props, [...FIELD_LABEL_PROPS, 'children']);

    const { $root } = createFieldLabel(locals);
    const $ = combineProps($others, $root);

    return <label {...$}>{locals.children}</label>;
};
