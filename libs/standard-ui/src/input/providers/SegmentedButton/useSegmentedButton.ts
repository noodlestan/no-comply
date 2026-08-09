import { useContext } from 'solid-js';

import type { SegmentedButtonContext } from '../../contexts';

import { SegmentedButtonContextCTX } from './private';

export const useSegmentedButton = (): SegmentedButtonContext => {
	const [context] = useContext(SegmentedButtonContextCTX) || [];
	if (!context) {
		throw new Error('useSegmentedButton() must be wrapped in <SegmentedButtonContextProvider/>');
	}

	return context;
};
