import { definePropKeys } from '@no-comply/solid-primitives';

import { LABEL_MIXIN_PROPS } from '../../mixins';

import type { LabelProps } from './types';

export const $LABEL = 'component:standard:label';

export const LABEL_PROPS = definePropKeys<LabelProps>()([...LABEL_MIXIN_PROPS, 'tag', 'for']);
