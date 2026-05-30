import type { AriaAttributes } from '../../attributes';
import type { PressableRoleName } from '../../role';
import type { PressableTagName } from '../../tag';

export type PressableType = 'button' | 'submit' | 'reset';

export interface AriaPressableProps {
	tag?: PressableTagName;
	role?: PressableRoleName;
	type?: PressableType;
	tabIndex?: number | null;
	disabled?: boolean;
}

interface AriaPressableRoot {
	component: PressableTagName;
	role?: PressableRoleName;
	type: PressableType | undefined;
	tabIndex: number | undefined;
	disabled: boolean | undefined;
	'aria-disabled': AriaAttributes['aria-disabled'];
	'data-disabled': '' | undefined;
}

export interface AriaPressableAPI<T extends PressableRoleName = PressableRoleName> {
	$root: AriaPressableRoot & {
		role: T;
	};
}

export interface AriaGenericPressableAPI {
	$root: AriaPressableRoot & {
		role: PressableRoleName | undefined;
	};
}
