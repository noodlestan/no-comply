import type { CodeLayoutContextValue } from '@purrtrait/code-layout';
import { useContext } from 'solid-js';

import { CodeLayoutCTX } from './private';

export const useCodeLayoutContext = (): CodeLayoutContextValue => {
	const context = useContext(CodeLayoutCTX);
	if (!context) {
		throw new Error('useCodeLayoutContext() must be wrapped in <CodeLayoutProvider/>');
	}
	return context;
};
