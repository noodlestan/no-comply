import { combineProps } from '@no-comply/solid-primitives';

import type { ComposableDisplayProps } from '../../mixins';
import { useAlignFirstLine } from '../../providers';
import { createDisplay } from '../Display';

import type { DisplayAlignedAPI, DisplayAlignedProps } from './types';

export const createDisplayAligned = (props: DisplayAlignedProps): DisplayAlignedAPI => {
    const alignedProps = useAlignFirstLine<ComposableDisplayProps>('display');

    const merged = combineProps(props, alignedProps, { aligned: true });

    return createDisplay(merged);
};
