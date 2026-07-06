import type { AttributeBoolean, AttributeNumber } from '@no-comply/solid-primitives';

import type { PressableRoleName } from '../../role';
import type { PressableTagName } from '../../tag';

export type PressableType = 'button' | 'submit' | 'reset';

export type AriaPressableProps = {
	tag?: PressableTagName;
	role?: PressableRoleName;
	type?: PressableType;
	tabIndex?: number;
	disabled?: boolean;
};

export type AriaPressableRootAPI = {
	component: PressableTagName;
	role?: PressableRoleName;
	type: PressableType | undefined;
	tabIndex: AttributeNumber;
	'aria-disabled': AttributeBoolean;
};

export type AriaPressableAPI<T extends PressableRoleName = PressableRoleName> = {
	$root: AriaPressableRootAPI & {
		role: T;
	};
};

export type AriaGenericPressableAPI = {
	$root: AriaPressableRootAPI & {
		role: PressableRoleName | undefined;
	};
};
