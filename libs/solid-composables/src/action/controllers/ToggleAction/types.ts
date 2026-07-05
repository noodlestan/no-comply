import type { IconValue, LabelValue } from '@no-comply/solid-primitives';

import type { IconMappedAPI } from '../../../icons';
import type { IconActionProps } from '../IconAction';

export type ToggleActionProps = {
	value: boolean;
	labels: ToggleActionLabelsProp;
	icons: ToggleActionIcons;
};

export type ToggleActionLabelsMap = {
	on: LabelValue;
	off: LabelValue;
};
export type ToggleActionLabelsProp = LabelValue | ToggleActionLabelsMap;

export type ToggleActionIcons = {
	on: IconValue;
	off: IconValue;
};

export type ToggleActionAPI = {
	_icon: Pick<IconActionProps, 'label'> & IconMappedAPI['_icon'];
};
