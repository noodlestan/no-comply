import type { AriaSwitchAPI } from '@no-comply/solid-accessibility';
import type { IconProps, ToggleActionAPI, ToggleActionProps } from '@no-comply/solid-composables';

import type { ButtonProps } from '../Button';
import type { IconButtonProps } from '../IconButton';

export type ToggleButtonProps = Pick<IconButtonProps, 'size' | 'onPress' | 'disabled'> &
	ToggleActionProps & {
		iconOnly?: boolean;
	};

export type ToggleButtonAPI = {
	_button: Pick<ButtonProps, 'variant' | 'size' | 'onPress' | 'disabled'> &
		Omit<AriaSwitchAPI['$root'], 'type'>;
	_icon: Pick<IconProps, 'icon'>;
	_iconButton: Pick<IconButtonProps, 'variant' | 'size' | 'onPress' | 'disabled'> &
		Omit<AriaSwitchAPI['$root'], 'type'> &
		ToggleActionAPI['_icon'];
};
