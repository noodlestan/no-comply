import {
	createSystemColorSchemeSignal,
	createSystemFocusSignal,
	createSystemLocaleSignal,
} from './private';
import type { SystemContextServiceAPI } from './types';

export const createSystemContextService = (): SystemContextServiceAPI => {
	return {
		colorScheme: createSystemColorSchemeSignal(),
		locale: createSystemLocaleSignal(),
		hasFocus: createSystemFocusSignal(),
	};
};
