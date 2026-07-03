import type { ExpandActionAPI, ExpandActionProps } from '@no-comply/solid-composables';

import type { IconButtonProps } from '../IconButton';

/**
 * Builds on {@link IconButtonProps} by hiding the `label` and `icon` props,
 * on {@link ExpandActionProps} by making the `icons` prop optional.
 */
export type ExpandButtonProps = Omit<IconButtonProps, 'label' | 'icon'> &
	Omit<ExpandActionProps, 'icons'> & {
		icons?: ExpandActionProps['icons'];
	};

export type ExpandButtonAPI = {
	/**
	 * Props for the underlying {@link IconButton}.
	 */
	_iconButton: IconButtonProps & ExpandActionAPI['_icon'];
};
