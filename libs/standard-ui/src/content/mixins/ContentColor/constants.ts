import { definePropKeys } from '@no-comply/solid-primitives';

import type { ContentColorMixinProps } from './types';

export const $CONTENT_COLOR_MIXIN = 'mixin:standard:content-color';

export const CONTENT_COLOR_MIXIN_PROPS = definePropKeys<ContentColorMixinProps>()(['color']);
