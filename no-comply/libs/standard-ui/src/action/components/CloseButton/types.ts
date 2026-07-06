import type { IconButtonProps } from '../IconButton';

export type CloseButtonProps = Pick<
	IconButtonProps,
	'label' | 'size' | 'onPress' | 'disabled' | 'alignFirstLine'
>;

export type CloseButtonAPI = {
	_iconButton: Pick<
		IconButtonProps,
		'label' | 'variant' | 'size' | 'icon' | 'onPress' | 'disabled' | 'alignFirstLine'
	>;
};
