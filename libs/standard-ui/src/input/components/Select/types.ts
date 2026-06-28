import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentLengthProp } from '../../../content';

export type SelectSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export type SelectProps = {
	id?: string;
	value?: string;
	placeholder?: string;
	size?: SelectSize;
	length?: ContentLengthProp;
	modified?: boolean;
	disabled?: boolean;
	invalid?: boolean;
	onChange?: (ev: Event) => void;
	onValueChange?: (id: string) => void;
	ref?: (el: HTMLSelectElement) => void;
	classList?: ClassList;
};
