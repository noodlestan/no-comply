import type { BaseContext } from '@no-comply/solid-contexts';
import type { Accessor } from 'solid-js';

export type OptionGroupContextOptions = {
	name: string;
	value?: string;
	disabled?: boolean;
	onValueChange: (value: string) => void;
};

export type OptionGroupContext = BaseContext & {
	type: 'option-group';
	id: string;
	name: Accessor<string>;
	isDisabled: Accessor<boolean>;
	isActive: (value: string) => boolean;
	onValueChange: (value: string) => void;
};

export type OptionGroupContextValue = [OptionGroupContext];
