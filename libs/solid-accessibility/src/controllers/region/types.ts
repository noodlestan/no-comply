import type { Accessor } from 'solid-js';

import type { AriaRoleName } from '../../role';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';

export interface AriaRegionProps extends AriaLabelledProps {
	role?: AriaRoleName;
}

export interface AriaRegionAPI<T extends AriaRoleName = AriaRoleName> {
	$root: AriaLabelledAPI['$root'] & {
		role: T;
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
	hasLabel: Accessor<boolean>;
}

export interface AriaGenericRegionAPI {
	$root: AriaLabelledAPI['$root'] & {
		role: AriaRoleName | undefined;
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
	hasLabel: Accessor<boolean>;
}
