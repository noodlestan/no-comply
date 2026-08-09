import { computedProps } from '@no-comply/solid-primitives';

import type { AriaAttributeRelevant } from '../../attributes';

import type { AriaLiveAPI, AriaLiveProps } from './types';

export const createAriaLive = (props: AriaLiveProps = {}): AriaLiveAPI => {
	const relevant = (): AriaAttributeRelevant => {
		const propValue = props.relevant;

		const value = Array.isArray(propValue) ? propValue.join(' ') : propValue;

		return (value as AriaAttributeRelevant) ?? 'additions text';
	};

	const $root = computedProps({
		'aria-live': () => props.live ?? 'polite',
		'aria-atomic': () => Boolean(props.atomic),
		'aria-relevant': relevant,
	});

	return {
		$root,
	};
};
