import type { BaseInputProps } from '@no-comply/solid-composables';
import type { Accessor } from 'solid-js';

export type TextInputValueProps = BaseInputProps<string> & {
	type?: string;
	placeholder?: string;
	maxLength?: number;
};

export type TextInputValueAPI = {
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
