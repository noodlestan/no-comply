import type { AriaSwitchAPI } from '@no-comply/solid-accessibility';
import type { ToggleActionAPI, ToggleActionProps } from '@no-comply/solid-composables';

import type { IconButtonProps } from '../IconButton';

export type ToggleButtonProps = Pick<IconButtonProps, 'size' | 'onPress' | 'disabled'> &
	ToggleActionProps;

export type ToggleButtonAPI = {
	_iconButton: Pick<IconButtonProps, 'variant' | 'size' | 'onPress' | 'disabled'> &
		Omit<AriaSwitchAPI['$root'], 'type'> &
		ToggleActionAPI['_icon'];
};
