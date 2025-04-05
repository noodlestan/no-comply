import type {
    IconButtonMixinElementProps,
    IconButtonMixinIconProps,
    IconButtonMixinProps,
} from '@noodlestan/headless-ui';

import type { ButtonElementProps, ButtonProps } from '../Button';

export type IconButtonProps = Omit<ButtonProps, 'length' | 'children'> &
    IconButtonMixinProps & {
        rounded?: boolean;
    };

export type IconButtonElementProps = ButtonElementProps & IconButtonMixinElementProps;

export type IconButtonAPI = {
    elProps: IconButtonElementProps;
    iconProps: IconButtonMixinIconProps;
};
