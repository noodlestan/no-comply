import type { BaseInputProps } from '@no-comply/solid-composables';
import type { Accessor } from 'solid-js';

export type NumberInputValueProps = BaseInputProps<string> & {
	placeholder?: string;
	maxLength?: number;
	min?: number;
	max?: number;
	step?: number;
};

export type NumberInputValueAPI = {
	$root: {
		value: string;
		onInput: (ev: InputEvent) => void;
		onFocus: (ev: FocusEvent) => void;
		onKeyDown: (ev: KeyboardEvent) => void;
		onKeyUp: (ev: KeyboardEvent) => void;
		onKeyPress: (ev: KeyboardEvent) => void;
	};
	value: Accessor<string>;
	wasTouched: Accessor<boolean>;
};
