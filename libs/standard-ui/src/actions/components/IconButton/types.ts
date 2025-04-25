import type { IconButtonMixinAPI, IconButtonMixinProps } from '@noodlestan/headless-ui';

import type { ButtonAPI, ButtonProps } from '../Button';

export type IconButtonProps = Omit<ButtonProps, 'length' | 'children'> &
    IconButtonMixinProps & {
        rounded?: boolean;
    };

export type IconButtonAPI = {
    elProps: ButtonAPI['elProps'] & IconButtonMixinAPI['elProps'];
    iconProps: IconButtonMixinAPI['iconProps'];
};
