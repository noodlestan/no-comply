import type { IconValue, LabelValue } from '@no-comply/solid-contexts';

import type { IconActionProps } from '../IconAction';

export type ToggleActionProps = {
	value: boolean;
	labels: ToggleActionLabels;
	icons: ToggleActionIcons;
};

export type ToggleActionLabels = {
	on: LabelValue;
	off: LabelValue;
};

export type ToggleActionIcons = {
	on: IconValue;
	off: IconValue;
};

export type ToggleActionAPI = {
	_icon: Pick<IconActionProps, 'label' | 'icon'>;
};
