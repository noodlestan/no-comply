import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createAriaLabelled } from '../label';

import type { AriaRadioGroupAPI, AriaRadioGroupProps } from './types';

export const createAriaRadioGroup = (props: AriaRadioGroupProps = {}): AriaRadioGroupAPI => {
	const { $root: $regionRoot, $label, $description, hasLabel } = createAriaLabelled(props);

	const $root = computedProps({
		component: () => 'fieldset' as const,
	});

	return {
		$root: combineProps($regionRoot, $root),
		$label,
		$description,
		hasLabel,
	};
};
