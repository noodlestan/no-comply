import type { ClassList } from '@no-comply/solid-primitives';

export type SelectSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type SelectLength = 's' | 'm' | 'l' | 'full' | 'auto';

export type SelectProps = {
	id?: string;
	value?: string;
	placeholder?: string;
	size?: SelectSize;
	length?: number | SelectLength;
	modified?: boolean;
	disabled?: boolean;
	invalid?: boolean;
	onChange?: (ev: Event) => void;
	onValueChange?: (id: string) => void;
	ref?: (el: HTMLSelectElement) => void;
	classList?: ClassList;
};
