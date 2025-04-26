import type { IconComponent } from '@noodlestan/context-ui';

import type { IconProps } from '../../../icon';

export type IconButtonProps = {
    icon: IconComponent;
    label: string;
};

export type IconButtonAPI = {
    $root: {
        label: string;
        'data-icon-button': '';
    };
    iconProps: Pick<IconProps, 'icon'>;
};
