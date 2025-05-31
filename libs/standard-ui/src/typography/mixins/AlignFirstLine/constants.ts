import { definePropKeys } from '@no-comply/solid-primitives';

import type { AlignFirstLineMixinProps } from './types';

export const $FIRST_LINE_ALIGN_MIXIN = 'mixin:standard:align-first-line';

export const FIRST_LINE_ALIGN_MIXIN_PROPS = definePropKeys<AlignFirstLineMixinProps>()(['height']);
