import type { BaseInputProps } from '@no-comply/solid-composables';

import type { InputBoxMixinProps, SizedInputBoxMixinProps } from '../../mixins';

export type TextInputSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type TextInputLength = 's' | 'm' | 'l' | 'full' | 'auto';

export type TextInputProps = BaseInputProps<string> &
	InputBoxMixinProps &
	SizedInputBoxMixinProps & {
		type?: string;
		placeholder?: string;
		length?: number | TextInputLength;
		maxLength?: number;
		min?: number;
		max?: number;
		autoConfirm?: boolean;
		modified?: boolean;
	};
