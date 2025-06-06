import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createAriaRegion } from '../region';

import type { AriaFormAPI, AriaFormProps } from './types';

export const createAriaForm = (props: AriaFormProps = {}): AriaFormAPI => {
	const { $root: $regionRoot, $label, $description } = createAriaRegion(props);

	const component = () => props.tag ?? 'form';
	const role = () => {
		if (component() !== 'form' || props.role !== 'form') {
			return props.role;
		}
	};
	const $root = computedProps({
		component,
		role,
	});

	return {
		$root: combineProps($regionRoot, $root),
		$label,
		$description,
	};
};
