import type { IconButtonProps } from '../IconButton';

export type CloseButtonProps = Pick<
    IconButtonProps,
    'label' | 'size' | 'onPress' | 'disabled' | 'aligned'
>;

export type CloseButtonAPI = {
    _iconButton: Pick<
        IconButtonProps,
        'variant' | 'label' | 'size' | 'icon' | 'onPress' | 'disabled' | 'aligned'
    >;
};
