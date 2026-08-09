import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionAPI } from '../region';

export type AriaAlertProps = AriaLabelledProps;

export type AriaAlertAPI = {
	$root: AriaRegionAPI<'alert'>['$root'] & {
		'aria-live': 'assertive';
		'aria-atomic': true;
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
};
