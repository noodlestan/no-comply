import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { CloseButtonProps } from './types';

export const CLOSE_BUTTON_PROPS = definePropKeys<CloseButtonProps>()([
    'label',
    'size',
    'onPress',
    'disabled',
]);
