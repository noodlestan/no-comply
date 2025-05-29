import { definePropKeys } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../types';

import type { IconButtonMixinProps } from './types';

export const ICON_BUTTOM_MAP_SIZE_TO_ICON_SIZE: Record<ContentSize, ContentSize> = {
    small: 'small',
    normal: 'normal',
    medium: 'medium',
    large: 'large',
};

export const ICON_BUTTON_MIXIN_PROPS = definePropKeys<IconButtonMixinProps>()(['size', 'round']);
