import type { FormRoleName } from '../../role';
import type { FormTagName } from '../../tag';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionAPI } from '../region';

export interface AriaFormProps extends AriaLabelledProps {
	tag?: FormTagName;
	role?: FormRoleName;
}

export interface AriaFormAPIRoot extends Omit<AriaRegionAPI['$root'], 'role'> {
	component: FormTagName;
	role?: FormRoleName;
}

export interface AriaFormAPI {
	$root: AriaFormAPIRoot;
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
}
