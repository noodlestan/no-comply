import { mergeProps } from '@noodlestan/context-ui-primitives';

import type { ComposableDisplayProps } from '../../mixins';
import { useFirstLineAlign } from '../../providers';
import { createDisplay } from '../Display';

import type { DisplayAlignedAPI, DisplayAlignedProps } from './types';

export const createDisplayAligned = (props: DisplayAlignedProps): DisplayAlignedAPI => {
    const alignedProps = useFirstLineAlign<ComposableDisplayProps>('display');

    const merged = mergeProps(props, alignedProps, { aligned: true });

    return createDisplay(merged);
};
