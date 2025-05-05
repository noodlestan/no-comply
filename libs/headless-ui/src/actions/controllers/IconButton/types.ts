import type { IconComponent } from '@noodlestan/context-ui';
import type { AriaAttributes } from '@noodlestan/context-ui-aria';

import type { IconProps } from '../../../icon';

export type IconButtonProps = {
    icon: IconComponent;
    label: string;
};

export type IconButtonAPI = {
    $root: {
        'aria-label': AriaAttributes['aria-label'];
        'data-icon-button': '';
    };
    iconProps: Pick<IconProps, 'icon'> & {
        'aria-hidden': AriaAttributes['aria-hidden'];
    };
};
