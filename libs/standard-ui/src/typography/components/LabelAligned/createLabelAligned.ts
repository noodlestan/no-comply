import { combineProps } from '@no-comply/solid-primitives';

import type { ComposableLabelProps } from '../../mixins';
import { useAlignFirstLine } from '../../providers';
import { createLabel } from '../Label';

import type { LabelAlignedAPI, LabelAlignedProps } from './types';

export const createLabelAligned = (props: LabelAlignedProps): LabelAlignedAPI => {
    const alignedProps = useAlignFirstLine<ComposableLabelProps>('label');

    const merged = combineProps(props, alignedProps, { aligned: true });

    return createLabel(merged);
};
