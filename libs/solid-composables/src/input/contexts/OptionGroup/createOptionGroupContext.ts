import { uuid } from '@no-comply/solid-primitives';

import type { OptionGroupContextOptions, OptionGroupContextValue } from './types';

export const createOptionGroupContext = (
	options: OptionGroupContextOptions,
): OptionGroupContextValue => {
	const id = uuid();

	const context = {
		type: 'option-group' as const,
		id,
		name: () => options.name,
		isDisabled: () => Boolean(options.disabled),
		isActive: (v: string) => v === options.value,
		onValueChange: (value: string) => options.onValueChange(value),
	};

	return [context];
};
