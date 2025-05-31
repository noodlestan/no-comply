import { combineProps } from '@no-comply/solid-primitives';

import type { ComposableTextProps } from '../../mixins';
import { useFirstLineAlign } from '../../providers';
import { createText } from '../Text';

import type { TextAlignedAPI, TextAlignedProps } from './types';

export const createTextAligned = (props: TextAlignedProps): TextAlignedAPI => {
    const alignedProps = useFirstLineAlign<ComposableTextProps>('text');

    const merged = combineProps(props, alignedProps, { aligned: true });

    return createText(merged);
};
