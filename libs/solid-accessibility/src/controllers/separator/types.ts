import type { AriaAttributeOrientation } from '../../attributes';
import type { SeparatorRoleName } from '../../role';
import type { SeparatorTagName } from '../../tag';

export type SeparatorOrientation = 'button' | 'submit' | 'reset';

export type AriaSeparatorProps = {
	tag?: SeparatorTagName;
	role?: SeparatorRoleName;
	orientation?: AriaAttributeOrientation;
};

export type AriaSeparatorAPI = {
	$root: {
		component: SeparatorTagName;
		role: SeparatorRoleName;
		'aria-orientation': AriaAttributeOrientation;
	};
};
