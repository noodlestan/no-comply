import { useContext } from 'solid-js';

import type { SolidCodeLayoutContextValue } from '../../contexts';

import { SolidCodeLayoutCTX } from './private';

export const useSolidCodeLayoutContext = (): SolidCodeLayoutContextValue => {
	const context = useContext(SolidCodeLayoutCTX);
	if (!context) {
		throw new Error('useSolidCodeLayoutContext() must be wrapped in <CodeLayoutProvider/>');
	}
	return context;
};
