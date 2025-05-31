import { combineProps } from '@no-comply/solid-primitives';

import type { ComposableTextProps } from '../../mixins';
import { useAlignFirstLine } from '../../providers';
import { createText } from '../Text';

import type { TextAlignedAPI, TextAlignedProps } from './types';

export const createTextAligned = (props: TextAlignedProps): TextAlignedAPI => {
    const alignedProps = useAlignFirstLine<ComposableTextProps>('text');

    const merged = combineProps(props, alignedProps, { aligned: true });

    return createText(merged);
};
