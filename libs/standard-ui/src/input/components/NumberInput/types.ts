import type { BaseInputProps } from '@no-comply/solid-composables';

import type { InputBoxMixinProps, SizedInputBoxMixinProps } from '../../mixins';

export type NumberInputLength = 's' | 'm' | 'l' | 'full' | 'auto';

export type NumberInputProps = BaseInputProps<string> &
	InputBoxMixinProps &
	SizedInputBoxMixinProps & {
		placeholder?: string;
		length?: number | NumberInputLength;
		maxLength?: number;
		min?: number;
		max?: number;
		step?: number;
	};

export type NumberInputAPI = {
	$root: object;
};
