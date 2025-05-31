import type { AriaAttributes } from '@no-comply/solid-accessibility';
import type { IconComponent } from '@no-comply/solid-contexts';

import type { IconProps } from '../../../icon';

export type IconActionProps = {
    icon: IconComponent;
    label: string;
};

export type IconActionAPI = {
    $root: {
        'aria-label': AriaAttributes['aria-label'];
    };
    icon: Pick<IconProps, 'icon'> & {
        'aria-hidden': AriaAttributes['aria-hidden'];
    };
};
