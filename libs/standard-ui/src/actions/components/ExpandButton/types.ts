import type {
    ExpandButtonAPI as HeadlessExpandButtonAPI,
    ExpandButtonProps as HeadlessExpandButtonProps,
} from '@noodlestan/headless-ui';

import type { IconButtonProps } from '../IconButton';

export type ExpandButtonProps = Pick<IconButtonProps, 'size' | 'onPress' | 'disabled'> &
    HeadlessExpandButtonProps;

export type ExpandButtonAPI = {
    iconButtonProps: Pick<IconButtonProps, 'variant' | 'size' | 'onPress' | 'disabled'> &
        HeadlessExpandButtonAPI['iconButtonProps'];
};
