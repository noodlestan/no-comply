import { attributeBoolean, computedProps } from '@no-comply/solid-primitives';

import type { PressableRoleName } from '../../role';

import type { AriaGenericPressableAPI, AriaPressableAPI, AriaPressableProps } from './types';

/**
 * Creates an ARIA pressable controller with a dynamic role.
 */
export function createAriaPressable(props: AriaPressableProps): AriaPressableAPI;
/**
 * Creates an ARIA pressable controller with a static ARIA role.
 * @param staticRole If provided, `props.role` is ignored
 */
export function createAriaPressable<T extends PressableRoleName = PressableRoleName>(
	props: AriaPressableProps,
	staticRole: T,
): AriaPressableAPI<T>;
/**
 * @ignore
 */
export function createAriaPressable(
	props: AriaPressableProps,
	staticRole?: PressableRoleName | undefined,
): AriaGenericPressableAPI {
	const component = () => props.tag ?? 'button';

	const role = () => {
		if (staticRole) {
			return staticRole;
		}
		if (props.role) {
			return props.role;
		}
		const isNativeButton = component() === 'button';
		const isLink = component() === 'a';

		if (isNativeButton || isLink) {
			return undefined;
		}

		return 'button';
	};

	const type = () => (component() === 'button' ? props.type : undefined);
	const tabIndex = () => props.tabIndex ?? 0;

	const $root = computedProps({
		component,
		role,
		type,
		tabIndex,
		'aria-disabled': () => attributeBoolean(props.disabled),
	});

	return {
		$root,
	};
}
