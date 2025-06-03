import { definePropKeys } from '@no-comply/solid-primitives';

import type { LayoutGapProps, LayoutPaddingProps } from './types';

export const LAYOUT_GAP_PROPS = definePropKeys<LayoutGapProps>()(['gap', 'rowGap', 'columnGap']);

export const LAYOUT_PADDING_PROPS = definePropKeys<LayoutPaddingProps>()([
    'padding',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
]);
