import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { MediaQueryProps } from './types';

export const MEDIA_QUERY_PROPS = definePropKeys<MediaQueryProps>()(['query']);
