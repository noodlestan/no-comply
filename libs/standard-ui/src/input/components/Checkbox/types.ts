import type { AlignedToFirstLineMixinProps } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

export type CheckboxSize = 'xs' | 's' | 'm' | 'l';

export type CheckboxProps = AlignedToFirstLineMixinProps & {
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
