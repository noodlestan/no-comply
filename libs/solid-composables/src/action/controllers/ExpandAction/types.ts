import type { AriaAttributes } from '@no-comply/solid-accessibility';
import type { IconValue, LabelValue } from '@no-comply/solid-contexts';

import type { IconActionProps } from '../IconAction';

export type ExpandActionProps = {
	controls: string;
	expanded: boolean;
	labels: ExpandActionLabels;
	icons: ExpandActionIcons;
};

export type ExpandActionLabels = {
	expanded: LabelValue;
	collapsed: LabelValue;
};

export type ExpandActionIcons = {
	expanded: IconValue;
	collapsed: IconValue;
};

export type ExpandActionAPI = {
	_icon: Pick<IconActionProps, 'label' | 'icon'> & {
		'aria-expanded': AriaAttributes['aria-expanded'];
		'aria-controls': AriaAttributes['aria-controls'];
	};
};
