import type { AxisShorthandInput, ResponsiveProp } from '@no-comply/solid-primitives';
import { type Accessor, createMemo } from 'solid-js';

import type { LayoutGapProps } from '../types';

export function createGapShorthandInput(
    props: LayoutGapProps,
): Accessor<AxisShorthandInput<ResponsiveProp<string> | undefined>> {
    return createMemo(() => {
        return [props.gap, props.rowGap, props.columnGap] as const;
    });
}
