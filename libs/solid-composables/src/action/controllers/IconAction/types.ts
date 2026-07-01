import type { AttributeString, IconComponent } from '@no-comply/solid-primitives';

import type { IconProps } from '../../../icon';

export type IconActionProps = {
	icon: IconComponent;
	label: string;
};

export type IconActionAPI = {
	$root: {
		'aria-label': NonNullable<AttributeString>;
	};
	icon: Pick<IconProps, 'icon'> & {
		'aria-hidden': true;
	};
};
