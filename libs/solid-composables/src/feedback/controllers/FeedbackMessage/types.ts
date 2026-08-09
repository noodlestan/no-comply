import type {
	AriaFeedbackAPI,
	AriaFeedbackProps,
	AriaFeedbackState,
	AriaLabelledProps,
	AriaRegionAPI,
	FeedbackRoleName,
} from '@no-comply/solid-accessibility';
import type { IconComponent } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

export type FeedbackMessageProps = AriaLabelledProps &
	Omit<AriaFeedbackProps, 'state'> & {
		variant: string;
		pending?: boolean;
		variantStateMap: Record<string, AriaFeedbackState>;
		icon?: IconComponent;
		iconMap?: Record<string, IconComponent>;
	};

export type FeedbackMessageAPI = {
	$root: AriaRegionAPI<FeedbackRoleName>['$root'] & {
		'data-message-variant': string;
	};
	$label: AriaFeedbackAPI['$label'];
	$description: AriaFeedbackAPI['$description'];
	_icon: {
		icon: IconComponent | undefined;
	};
	hasIcon: Accessor<boolean>;
};
