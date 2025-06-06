import type { AriaAttributes } from '../../types';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionAPI } from '../region';

export type AriaTreeProps = AriaLabelledProps & {
	multiselectable?: boolean;
	orientation?: 'vertical' | 'horizontal';
};

export interface AriaTreeAPI {
	$root: AriaRegionAPI<'tree'>['$root'] & {
		'aria-orientation': AriaAttributes['aria-orientation'];
		'aria-multiselectable': AriaAttributes['aria-multiselectable'];
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
}
