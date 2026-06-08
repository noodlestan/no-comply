import type { ClassList } from '@no-comply/solid-primitives';

export type NumberInputSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type NumberInputLength = 's' | 'm' | 'l' | 'full' | 'auto';

export type NumberInputProps = {
	id?: string;
	value?: string;
	placeholder?: string;
	size?: NumberInputSize;
	length?: number | NumberInputLength;
	maxLength?: number;
	min?: number;
	max?: number;
	step?: number;
	modified?: boolean;
	disabled?: boolean;
	invalid?: boolean;
	onChange?: (ev: Event) => void;
	onValueChange?: (value: string) => void;
	ref?: (el: HTMLInputElement) => void;
	classList?: ClassList;
};
