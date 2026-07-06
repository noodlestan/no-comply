import type { AriaAttributeOrientation } from '../../attributes';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionAPI } from '../region';

export type AriaTreeProps = AriaLabelledProps & {
	multiselectable?: boolean;
	orientation?: AriaAttributeOrientation;
};

export type AriaTreeAPI = {
	$root: AriaRegionAPI<'tree'>['$root'] & {
		'aria-orientation': AriaAttributeOrientation;
		'aria-multiselectable': boolean;
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
};
