import { definePropKeys } from '@no-comply/solid-primitives';

import { ACTION_LABEL_MIXIN_PROPS } from '../../mixins';

import type { ActionLabelProps } from './types';

export const $ACTION_LABEL = 'component:standard:action-label';

export const ACTION_LABEL_PROPS = definePropKeys<ActionLabelProps>()([
	...ACTION_LABEL_MIXIN_PROPS,
	'tag',
]);
