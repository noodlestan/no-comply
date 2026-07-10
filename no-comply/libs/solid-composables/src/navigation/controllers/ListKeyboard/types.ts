import type { RovingIndexAPI } from '../RovingIndex';

export type ListKeyboardProps = {
	roving: RovingIndexAPI;
	onSelect?: (index: number) => void;
	onToggle?: (index: number) => void;
};

export type ListKeyboardAPI = {
	$root: {
		onKeyDown: (ev: KeyboardEvent) => void;
	};
} & Pick<
	RovingIndexAPI,
	'index' | 'focusNext' | 'focusPrev' | 'focusFirst' | 'focusLast' | 'focusIndex'
>;
