import type { AlignedToFirstLineTargetProps } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../size';

export type CheckboxProps = AlignedToFirstLineTargetProps & {
	id?: string;
	checked?: boolean;
	size?: ContentSize;
	label?: string;
	modified?: boolean;
	disabled?: boolean;
	invalid?: boolean;
	onChange?: (ev: Event) => void;
	onValueChange?: (value: boolean) => void;
	ref?: (el: HTMLInputElement) => void;
	classList?: ClassList;
};
