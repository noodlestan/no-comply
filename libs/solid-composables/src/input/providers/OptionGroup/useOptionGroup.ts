import { useContext } from 'solid-js';

import type { OptionGroupContext } from '../../contexts';

import { OptionGroupContextCTX } from './private';

export const useOptionGroup = (): OptionGroupContext => {
	const [context] = useContext(OptionGroupContextCTX) || [];
	if (!context) {
		throw new Error('useOptionGroup() must be wrapped in <OptionGroupContextProvider/>');
	}

	return context;
};
