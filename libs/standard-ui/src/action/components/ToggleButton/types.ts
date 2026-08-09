import type { AriaSwitchAPI } from '@no-comply/solid-accessibility';
import type {
	IconProps,
	ToggleActionAPI,
	ToggleActionIcons,
	ToggleActionLabelsProp,
	ToggleActionProps,
} from '@no-comply/solid-composables';

import type { ToggleActionMixinAPI, ToggleActionMixinProps } from '../../mixins';
import type { ButtonProps } from '../Button';
import type { IconButtonProps } from '../IconButton';

export type ToggleButtonProps = Pick<IconButtonProps, 'size' | 'onPress' | 'disabled'> &
	Pick<ToggleActionProps, 'value'> &
	Pick<ToggleActionMixinProps, 'variant'> & {
		labels?: ToggleActionLabelsProp;
		icons?: ToggleActionIcons;
		iconOnly?: boolean;
	};

export type ToggleButtonAPI = {
	_button: Pick<ButtonProps, 'variant' | 'size' | 'onPress' | 'disabled'> &
		Omit<AriaSwitchAPI['$root'], 'type'> &
		ToggleActionMixinAPI['$root'];
	_icon: Pick<IconProps, 'icon'>;
	_iconButton: Pick<IconButtonProps, 'variant' | 'size' | 'onPress' | 'disabled'> &
		Omit<AriaSwitchAPI['$root'], 'type'> &
		ToggleActionAPI['_icon'];
};
