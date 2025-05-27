import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { TEXT_MIXIN_PROPS } from '../../mixins';

import type { TextOwnProps, TextProps } from './types';

export const TEXT_OWN_PROPS = definePropKeys<TextOwnProps>()(['tag']);

export const TEXT_PROPS = definePropKeys<TextProps>()([...TEXT_MIXIN_PROPS, ...TEXT_OWN_PROPS]);
