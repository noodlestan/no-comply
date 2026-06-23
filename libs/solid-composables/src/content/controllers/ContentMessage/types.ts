import type {
	AriaLabelledAPI,
	AriaLabelledProps,
	AriaRegionAPI,
} from '@no-comply/solid-accessibility';
import type { IconComponent } from '@no-comply/solid-contexts';
import type { Accessor } from 'solid-js';

export type ContentMessageProps = AriaLabelledProps & {
	variant: string;
	icon?: IconComponent;
	iconMap?: Record<string, IconComponent>;
};

export type ContentMessageAPI = {
	$root: AriaRegionAPI<'note'>['$root'] & {
		'data-message-variant': string;
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
	_icon: {
		icon: IconComponent | undefined;
	};
	hasIcon: Accessor<boolean>;
};
