export type TreeListKeyboardControllerAPI = {
	$root: {
		ref: (el: HTMLElement) => void;
		onKeyDown: (ev: KeyboardEvent) => void;
	};
};
