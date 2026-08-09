import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionAPI } from '../region';

export type AriaStatusProps = AriaLabelledProps;

export type AriaStatusAPI = {
	$root: AriaRegionAPI<'status'>['$root'] & {
		'aria-live': 'polite';
		'aria-atomic': true;
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
};
