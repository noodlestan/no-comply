import type { Accessor } from 'solid-js';

import type { AriaLabelledAPI, AriaLabelledProps } from '../label';

export type AriaRadioGroupProps = AriaLabelledProps;

export type AriaRadioGroupAPI = {
	$root: AriaLabelledAPI['$root'] & {
		component: 'fieldset';
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
	hasLabel: Accessor<boolean>;
};
