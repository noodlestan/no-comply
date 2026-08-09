import type { AttributeBoolean } from '@no-comply/solid-primitives';

export type FocusRingProps = {
	passive?: boolean;
};

export type FocusRingAPI = {
	$root: {
		onKeyDown: (ev: KeyboardEvent) => void;
		'data-has-focus': AttributeBoolean;
		'data-lost-focus': AttributeBoolean;
	};
	$focusTarget: {
		onFocus: (ev: FocusEvent) => void;
		onBlur: (ev: FocusEvent) => void;
	};
};
