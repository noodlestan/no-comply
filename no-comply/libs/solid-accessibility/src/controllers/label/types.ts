import type { Accessor } from 'solid-js';

export type AriaLabelledProps = {
	label?: string;
	labelled?: boolean;
	'aria-labelledby'?: string;
	description?: string;
	described?: boolean;
	'aria-describedby'?: string;
};

export type AriaLabelledAPI = {
	$root: {
		'aria-label': string | undefined;
		'aria-labelledby': string | undefined;
		'aria-description': string | undefined;
		'aria-describedby': string | undefined;
	};
	$label: {
		id?: string;
	};
	$description: {
		id?: string;
	};
	hasLabel: Accessor<boolean>;
};
