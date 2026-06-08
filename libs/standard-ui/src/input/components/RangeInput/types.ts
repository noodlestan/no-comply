import type { ClassList } from '@no-comply/solid-primitives';

export type RangeInputSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type RangeInputLength = 's' | 'm' | 'l' | 'full' | 'auto';

export type RangeInputProps = {
	id?: string;
	value?: string;
	min?: number;
	max?: number;
	step?: number;
	size?: RangeInputSize;
	length?: number | RangeInputLength;
	autoConfirm?: boolean;
	modified?: boolean;
	disabled?: boolean;
	invalid?: boolean;
	onChange?: (ev: Event) => void;
	onValueChange?: (value: string) => void;
	ref?: (el: HTMLInputElement) => void;
	classList?: ClassList;
};
