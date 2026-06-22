import type { AriaAttributes } from '../../attributes';
import type { SeparatorRoleName } from '../../role';
import type { SeparatorTagName } from '../../tag';

export type SeparatorOrientation = 'button' | 'submit' | 'reset';

export type AriaSeparatorProps = {
	tag?: SeparatorTagName;
	role?: SeparatorRoleName;
	orientation?: AriaAttributes['aria-orientation'];
};

export type AriaSeparatorAPI = {
	$root: {
		component: SeparatorTagName;
		role: SeparatorRoleName;
		'aria-orientation': AriaAttributes['aria-orientation'];
	};
};
