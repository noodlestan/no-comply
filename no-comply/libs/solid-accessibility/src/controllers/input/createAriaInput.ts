import { attributeBoolean, computedProps } from '@no-comply/solid-primitives';

import type { AriaInputAPI, AriaInputProps } from './types';

/**
 * Creates an ARIA input controller that can be disabled
 */
export function createAriaInput(props: AriaInputProps): AriaInputAPI {
	const $root = computedProps({
		'aria-disabled': () => attributeBoolean(props.disabled),
	});

	return {
		$root,
	};
}
