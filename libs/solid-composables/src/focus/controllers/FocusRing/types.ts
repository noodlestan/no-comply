export type FocusRingProps = {
	passive?: boolean;
};

export type FocusRingAPI = {
	$root: {
		onKeyDown: (ev: KeyboardEvent) => void;
		'data-is-active': string | undefined;
	};
	$focusTarget: {
		onFocus: (ev: FocusEvent) => void;
		onBlur: (ev: FocusEvent) => void;
	};
};
