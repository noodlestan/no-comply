import { definePropKeys } from '@no-comply/solid-primitives';

import type { ContentPaletteMixinProps } from './types';

export const $CONTENT_PALETTE_MIXIN = 'mixin:standard:content-palette';

export const CONTENT_PALETTE_MIXIN_PROPS = definePropKeys<ContentPaletteMixinProps>()(['palette']);
