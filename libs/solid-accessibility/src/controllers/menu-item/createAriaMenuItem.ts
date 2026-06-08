import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createAriaLabelled } from '../label';

import type { AriaMenuItemAPI, AriaMenuItemProps } from './types';

export function createAriaMenuItem(props: AriaMenuItemProps): AriaMenuItemAPI {
	const { $root: $labelledRoot, ...rest } = createAriaLabelled(props);

	const $root = computedProps({
		role: () => props.role ?? 'menuitem',
	});

	return {
		...rest,
		$root: combineProps($labelledRoot, $root),
	};
}
