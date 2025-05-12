import type { IconButtonProps } from '../IconButton';

export type CloseButtonProps = Pick<IconButtonProps, 'label' | 'size' | 'onPress' | 'disabled'>;

export type CloseButtonAPI = {
    iconButtonProps: Pick<
        IconButtonProps,
        'variant' | 'label' | 'size' | 'icon' | 'onPress' | 'disabled'
    >;
};
