import type { Accessor } from 'solid-js';

export type RovingIndexProps = {
	items: Accessor<unknown[]>;
	loop?: boolean;
	initialIndex?: number;
};

export type RovingIndexAPI = {
	index: Accessor<number>;
	focusNext: () => void;
	focusPrev: () => void;
	focusFirst: () => void;
	focusLast: () => void;
	focusIndex: (i: number) => void;
};
