import type { Accessor } from 'solid-js';

export type AriaLabelledProps = {
	label?: string;
	labelled?: boolean;
	'aria-labelledby'?: string;
	described?: boolean;
	'aria-describedby'?: string;
};

export type AriaLabelledAPI = {
	$root: {
		'aria-label'?: string;
		'aria-labelledby'?: string;
		'aria-describedby'?: string;
	};
	$label: {
		id?: string;
	};
	$description: {
		id?: string;
	};
	hasLabel: Accessor<boolean>;
};
