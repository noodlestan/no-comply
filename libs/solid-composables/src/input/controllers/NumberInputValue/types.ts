import type { Accessor } from 'solid-js';

import type { BaseInputValueProps } from '../../types';

export type NumberInputValueProps = BaseInputValueProps<string> & {
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
