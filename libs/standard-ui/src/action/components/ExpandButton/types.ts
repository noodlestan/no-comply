import type { ExpandActionAPI, ExpandActionProps } from '@no-comply/solid-composables';

import type { IconButtonProps } from '../IconButton';

export type ExpandButtonProps = Pick<IconButtonProps, 'size' | 'onPress' | 'disabled' | 'aligned'> &
	Omit<ExpandActionProps, 'icons'> & {
		icons?: ExpandActionProps['icons'];
	};

export type ExpandButtonAPI = {
	_iconButton: Pick<IconButtonProps, 'variant' | 'size' | 'onPress' | 'disabled' | 'aligned'> &
		ExpandActionAPI['_icon'];
};
