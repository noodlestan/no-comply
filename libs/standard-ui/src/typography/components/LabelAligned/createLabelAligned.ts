import { mergeProps } from '@noodlestan/context-ui-primitives';

import type { ComposableLabelProps } from '../../mixins';
import { useFirstLineAlign } from '../../providers';
import { createLabel } from '../Label';

import type { LabelAlignedAPI, LabelAlignedProps } from './types';

export const createLabelAligned = (props: LabelAlignedProps): LabelAlignedAPI => {
    const alignedProps = useFirstLineAlign<ComposableLabelProps>('label');

    const merged = mergeProps(props, alignedProps, { aligned: true });

    return createLabel(merged);
};
