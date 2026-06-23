import type { AriaAttributeLive } from '../../attributes';
import type { FeedbackRoleName } from '../../role';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaLiveAPI } from '../live';
import type { AriaRegionAPI } from '../region';

export type AriaFeedbackState = undefined | AriaFeedbackOutcome;
export type AriaFeedbackOutcome = 'status' | 'alert';

export type AriaFeedbackProps = AriaLabelledProps & {
	state: AriaFeedbackState | undefined;
	live?: AriaAttributeLive;
};

export type AriaFeedbackAPI = {
	$root: AriaRegionAPI<FeedbackRoleName>['$root'] &
		AriaLiveAPI['$root'] & {
			'aria-busy': boolean;
		};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
};
