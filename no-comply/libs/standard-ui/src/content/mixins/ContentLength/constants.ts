import { definePropKeys } from '@no-comply/solid-primitives';

import type { ContentLengthMixinProps } from './types';

export const $CONTENT_LENGTH_MIXIN = 'mixin:standard:content-length';

export const CONTENT_LENGTH_MIXIN_PROPS = definePropKeys<ContentLengthMixinProps>()(['length']);
