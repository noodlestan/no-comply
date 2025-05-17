import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { LINK_PROPS as HEADLESS_LINK_PROPS } from '@noodlestan/headless-ui';

import type { LinkProps } from './types';

export const LINK_PROPS = definePropKeys<LinkProps>()(HEADLESS_LINK_PROPS);
