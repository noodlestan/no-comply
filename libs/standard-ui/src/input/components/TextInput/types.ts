import type { ClassList } from '@no-comply/solid-primitives';

export type TextInputSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type TextInputLength = 's' | 'm' | 'l' | 'full' | 'auto';

export type InputControllerProps<T> = {
	value?: T;
	onChange?: (ev: Event) => void;
	onValueChange?: (value: T) => void;
};

export type TextInputProps = InputControllerProps<string> & {
	id?: string;
	type?: string;
	placeholder?: string;
	size?: TextInputSize;
	length?: number | TextInputLength;
	maxLength?: number;
	min?: number;
	max?: number;
	autoConfirm?: boolean;
	modified?: boolean;
	disabled?: boolean;
	invalid?: boolean;
	ref?: (el: HTMLInputElement) => void;
	classList?: ClassList;
};
