import type { AttributeBoolean } from '@no-comply/solid-primitives';

export type FocusRingProps = {
	passive?: boolean;
};

export type FocusRingAPI = {
	$root: {
		onKeyDown: (ev: KeyboardEvent) => void;
		'data-had-focus': AttributeBoolean;
		'data-is-focused': AttributeBoolean;
	};
	$focusTarget: {
		onFocus: (ev: FocusEvent) => void;
		onBlur: (ev: FocusEvent) => void;
	};
};
