import type { ExpandActionAPI, ExpandActionProps } from '@noodlestan/headless-ui';

import type { IconButtonProps } from '../IconButton';

export type ExpandButtonProps = Pick<IconButtonProps, 'size' | 'onPress' | 'disabled'> &
    ExpandActionProps;

export type ExpandButtonAPI = {
    iconButtonProps: Pick<IconButtonProps, 'variant' | 'size' | 'onPress' | 'disabled'> &
        ExpandActionAPI['iconActionProps'];
};
