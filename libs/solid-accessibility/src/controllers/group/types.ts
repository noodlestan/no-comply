import type { Accessor } from 'solid-js';

import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionAPI } from '../region';

export type AriaGroupProps = AriaLabelledProps & {
	expanded?: boolean;
	setSize?: number;
};

export type AriaGroupAPI = {
	$root: Omit<AriaRegionAPI['$root'], 'role'> & {
		role: 'group' | undefined;
		'aria-expanded': boolean;
		'aria-setsize': number | undefined;
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
	hasLabel: Accessor<boolean>;
};
