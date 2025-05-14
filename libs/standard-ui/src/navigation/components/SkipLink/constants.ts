import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { LINK_PROPS } from '../Link';

import type { SkipLinkProps } from './types';

export const SKIP_LINK_PROPS = definePropKeys<SkipLinkProps>()([...LINK_PROPS, 'size']);
