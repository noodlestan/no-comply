import { computedProps } from '@no-comply/solid-primitives';

import type { AriaSeparatorAPI, AriaSeparatorProps } from './types';

export function createAriaSeparator(props: AriaSeparatorProps): AriaSeparatorAPI {
	const component = () => props.tag ?? 'hr';

	const role = () => {
		return props.role ?? 'presentation';
	};

	const $root = computedProps({
		component,
		role,
		'aria-orientation': () => props.orientation ?? 'horizontal',
	});

	return {
		$root,
	};
}
