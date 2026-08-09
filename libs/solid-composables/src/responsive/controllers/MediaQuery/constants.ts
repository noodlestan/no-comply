import { definePropKeys } from '@no-comply/solid-primitives';

import type { MediaQueryProps } from './types';

export const $MEDIA_QUERY = definePropKeys<MediaQueryProps>()(['query']);
export const MEDIA_QUERY_PROPS = definePropKeys<MediaQueryProps>()(['query']);
