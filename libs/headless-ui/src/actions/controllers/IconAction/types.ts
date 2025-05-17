import type { IconComponent } from '@noodlestan/context-ui';
import type { AriaAttributes } from '@noodlestan/context-ui-aria';

import type { IconProps } from '../../../icon';

export type IconActionProps = {
    icon: IconComponent;
    label: string;
};

export type IconActionAPI = {
    $root: {
        'aria-label': AriaAttributes['aria-label'];
    };
    iconProps: Pick<IconProps, 'icon'> & {
        'aria-hidden': AriaAttributes['aria-hidden'];
    };
};
