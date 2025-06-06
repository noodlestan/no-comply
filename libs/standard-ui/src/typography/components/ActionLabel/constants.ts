import { definePropKeys } from '@no-comply/solid-primitives';

import { ACTION_LABEL_MIXIN_PROPS } from '../../mixins';

import type { ActionLabelOwnProps, ActionLabelProps } from './types';

export const $ACTION_LABEL = 'component:standard:action-label';

export const ACTION_LABEL_OWN_PROPS = definePropKeys<ActionLabelOwnProps>()(['tag']);

export const ACTION_LABEL_PROPS = definePropKeys<ActionLabelProps>()([
	...ACTION_LABEL_MIXIN_PROPS,
	...ACTION_LABEL_OWN_PROPS,
]);
