import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentLengthProp } from '../../../content';

export type RangeInputSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export type RangeInputProps = {
	id?: string;
	value?: string;
	min?: number;
	max?: number;
	step?: number;
	size?: RangeInputSize;
	length?: ContentLengthProp;
	modified?: boolean;
	disabled?: boolean;
	invalid?: boolean;
	onChange?: (ev: Event) => void;
	onValueChange?: (value: string) => void;
	ref?: (el: HTMLInputElement) => void;
	classList?: ClassList;
};
