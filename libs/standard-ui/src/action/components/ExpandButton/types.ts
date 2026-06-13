import type { ExpandActionAPI, ExpandActionProps } from '@no-comply/solid-composables';
import type { PopoverTriggerTagProps } from '@no-comply/solid-primitives';

import type { IconButtonProps } from '../IconButton';

/**
 * Builds on {@link IconButtonProps} by hiding the `label` and `icon` props,
 * on {@link ExpandActionProps} by making the `icons` prop optional,
 * and on {@link PopoverTriggerTagProps}.
 */
export type ExpandButtonProps = Omit<IconButtonProps, 'label' | 'icon'> &
	Omit<ExpandActionProps, 'icons'> &
	PopoverTriggerTagProps & {
		icons?: ExpandActionProps['icons'];
	};

/**
 * Exposes the props for the underlying {@link component:IconButton}.
 */
export type ExpandButtonAPI = {
	_iconButton: IconButtonProps & ExpandActionAPI['_icon'];
};
