import type { ExpandActionAPI, ExpandActionProps } from '@no-comply/solid-composables';

import type { IconButtonProps } from '../IconButton';

export type ExpandButtonProps = Pick<IconButtonProps, 'size' | 'onPress' | 'disabled' | 'aligned'> &
    ExpandActionProps;

export type ExpandButtonAPI = {
    iconButtonProps: Pick<
        IconButtonProps,
        'variant' | 'size' | 'onPress' | 'disabled' | 'aligned'
    > &
        ExpandActionAPI['iconActionProps'];
};
