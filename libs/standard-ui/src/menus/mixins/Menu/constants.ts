import { definePropKeys, omitPropKeys } from '@noodlestan/context-ui-primitives';

import { ACTION_MIXIN_PROPS } from '../../../actions';

import type { MenuMixinProps } from './types';

export const MENU_MIXIN_PROPS = definePropKeys<MenuMixinProps>()([
    ...omitPropKeys(ACTION_MIXIN_PROPS, ['size'] as const),
    'active',
]);
