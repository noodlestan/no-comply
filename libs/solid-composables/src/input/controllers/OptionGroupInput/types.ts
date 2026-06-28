import type {
	AriaLabelledAPI,
	AriaRadioGroupAPI,
	AriaRadioGroupProps,
} from '@no-comply/solid-accessibility';
import type { Accessor } from 'solid-js';

import type { OptionGroupContext, OptionGroupContextValue } from '../../contexts';
import type { BaseInputProps } from '../../types';

export type OptionGroupInputProps = AriaRadioGroupProps &
	Omit<BaseInputProps<string>, 'onValueChange'> & {
		name: string;
		onValueChange: (value: string) => void;
	};

export type OptionGroupInputAPI = {
	$root: AriaRadioGroupAPI['$root'];
	$label: AriaLabelledAPI['$label'];
	$description: AriaLabelledAPI['$description'];
	hasLabel: Accessor<boolean>;
	context: OptionGroupContext;
	contextValue: OptionGroupContextValue;
};
