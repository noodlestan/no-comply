import type { AriaSwitchAPI } from '@noodlestan/context-ui-aria';
import type {
    ToggleButtonAPI as HeadlessToggleButtonAPI,
    ToggleButtonProps as HeadlessToggleButtonProps,
} from '@noodlestan/headless-ui';

import type { IconButtonProps } from '../IconButton';

export type ToggleButtonProps = Pick<IconButtonProps, 'size' | 'onPress' | 'disabled'> &
    HeadlessToggleButtonProps;

export type ToggleButtonAPI = {
    iconButtonProps: Pick<IconButtonProps, 'variant' | 'size' | 'onPress' | 'disabled'> &
        Omit<AriaSwitchAPI['$root'], 'type'> &
        HeadlessToggleButtonAPI['iconButtonProps'];
};
