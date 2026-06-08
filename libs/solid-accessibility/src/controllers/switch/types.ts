import type { AriaAttributes } from '../../attributes';
import type { SwitchTagName } from '../../tag';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionAPI } from '../region';

export type AriaSwitchProps = AriaLabelledProps & {
	tag: SwitchTagName;
	checked: boolean;
	disabled: boolean;
};

export type AriaSwitchAPI = {
	$root: AriaRegionAPI<'switch'>['$root'] & {
		type: 'button' | 'checkbox' | undefined;
		component: SwitchTagName;
		'aria-checked': AriaAttributes['aria-checked'];
		'aria-disabled': AriaAttributes['aria-disabled'];
		'data-disabled': '' | undefined;
	};
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
};
