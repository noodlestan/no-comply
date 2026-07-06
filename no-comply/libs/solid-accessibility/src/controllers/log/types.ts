import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionAPI } from '../region';

export type AriaLogProps = AriaLabelledProps;

export type AriaLogAPI = {
	$root: AriaRegionAPI<'log'>['$root'] & {
		'aria-live': 'polite';
		'aria-relevant': 'additions';
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
};
