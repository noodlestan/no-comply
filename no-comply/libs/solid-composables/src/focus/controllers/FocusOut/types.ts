export type FocusOutInteractionType = 'keyboard' | 'pointer';

export type FocusOutProps = {
	onFocusOut: () => void;
};

export type FocusOutAPI = {
	$root: {
		onKeyDown: (ev: KeyboardEvent) => void;
		onPointerDown: (ev: PointerEvent) => void;
		onFocusOut: () => void;
	};
};
