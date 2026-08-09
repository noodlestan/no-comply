import type { ClassList } from '@no-comply/solid-primitives';
import type { JSX } from 'solid-js';

export type ListInputBoxItemProps = {
	children: JSX.Element;
	selected?: boolean;
	onPress?: (ev: Event) => void;
	tabIndex?: number;
	classList?: ClassList;
};
