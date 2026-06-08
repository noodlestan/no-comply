import type {
	AriaAttributes,
	AriaRegionAPI,
	AriaRegionProps,
} from '@no-comply/solid-accessibility';
import type { IconComponent } from '@no-comply/solid-contexts';

export type ContentMessageProps = Pick<AriaRegionProps, 'aria-describedby'> & {
	title: string;
	variant: string;
	icon: IconComponent;
};

export type ContentMessageAPI = {
	$root: AriaRegionAPI<'note' | 'status' | 'alert'>['$root'] & {
		'data-message': string;
	};
	$title: AriaRegionAPI['$label'] & {
		children: string;
	};
	$description: AriaRegionAPI['$description'];
	_icon: Pick<AriaAttributes, 'aria-label'> & {
		icon: IconComponent;
	};
};
