import { definePropKeys } from '@no-comply/solid-primitives';

import { MONO_MIXIN_PROPS } from '../../mixins';

import type { MonoProps } from './types';

export const $MONO = 'component:standard:mono';

export const MONO_PROPS = definePropKeys<MonoProps>()([...MONO_MIXIN_PROPS, 'tag']);
