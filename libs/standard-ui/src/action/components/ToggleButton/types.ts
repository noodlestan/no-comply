import type { AriaSwitchAPI } from '@noodlestan/context-ui-aria';
import type { ToggleActionAPI, ToggleActionProps } from '@noodlestan/headless-ui';

import type { IconButtonProps } from '../IconButton';

export type ToggleButtonProps = Pick<IconButtonProps, 'size' | 'onPress' | 'disabled'> &
    ToggleActionProps;

export type ToggleButtonAPI = {
    iconButtonProps: Pick<IconButtonProps, 'variant' | 'size' | 'onPress' | 'disabled'> &
        Omit<AriaSwitchAPI['$root'], 'type'> &
        ToggleActionAPI['iconActionProps'];
};
