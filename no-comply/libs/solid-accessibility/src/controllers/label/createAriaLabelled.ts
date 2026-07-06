import { computedProps, shortId } from '@no-comply/solid-primitives';
import { createMemo } from 'solid-js';

import type { AriaLabelledAPI, AriaLabelledProps } from './types';

export const createAriaLabelled = (props: AriaLabelledProps = {}): AriaLabelledAPI => {
	const labelledRandomId = createMemo(shortId);
	const describedRandomId = createMemo(shortId);

	const labelledby = () => {
		if (props.label) {
			return;
		}
		if (props['aria-labelledby']) {
			return props['aria-labelledby'];
		}
		if (props.labelled) {
			return labelledRandomId();
		}
	};

	const describedby = () => {
		if (props['aria-describedby']) {
			return props['aria-describedby'];
		}
		if (props.described) {
			return describedRandomId();
		}
	};

	const hasLabel = () => Boolean(props.label || labelledby());

	const $root = computedProps({
		'aria-label': () => props.label,
		'aria-labelledby': labelledby,
		'aria-description': () => props.description,
		'aria-describedby': describedby,
	});

	const $label = computedProps({
		id: labelledby,
	});

	const $description = computedProps({
		id: describedby,
	});

	return {
		$root,
		$label,
		$description,
		hasLabel,
	};
};
