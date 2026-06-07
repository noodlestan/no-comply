import type { ClassList } from '@no-comply/solid-primitives';

export type CheckboxSize = 's' | 'm' | 'l';

export type CheckboxProps = {
	id?: string;
	checked?: boolean;
	size?: CheckboxSize;
	label?: string;
	modified?: boolean;
	disabled?: boolean;
	invalid?: boolean;
	onChange?: (ev: Event) => void;
	onValueChange?: (value: boolean) => void;
	ref?: (el: HTMLInputElement) => void;
	classList?: ClassList;
};
