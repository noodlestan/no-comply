import { definePropKeys } from '@no-comply/solid-primitives';

import { LABEL_MIXIN_PROPS } from '../../mixins';

import type { LabelOwnProps, LabelProps } from './types';

export const $LABEL = 'component:standard:label';

export const LABEL_OWN_PROPS = definePropKeys<LabelOwnProps>()(['tag']);

export const LABEL_PROPS = definePropKeys<LabelProps>()([...LABEL_MIXIN_PROPS, ...LABEL_OWN_PROPS]);
