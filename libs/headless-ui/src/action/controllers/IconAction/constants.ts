import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { IconActionProps } from './types';

export const ICON_ACTION_PROPS = definePropKeys<IconActionProps>()(['icon', 'label']);
