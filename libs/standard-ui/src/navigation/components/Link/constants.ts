import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { LINK_PROPS as HEADLESS_LINKK_PROPS } from '@noodlestan/headless-ui';

import type { LinkProps } from './types';

export const LINK_PROPS = definePropKeys<LinkProps>()(HEADLESS_LINKK_PROPS);
