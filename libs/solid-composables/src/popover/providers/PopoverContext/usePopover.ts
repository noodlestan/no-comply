import { useContext } from 'solid-js';

import type { PopoverContext } from '../../contexts';

import { PopoverContextCTX } from './private';

export const usePopover = (): PopoverContext => {
	const [context] = useContext(PopoverContextCTX) || [];
	if (!context) {
		throw new Error('usePopover() must be wrapped in <PopoverContextProvider/>');
	}

	return context;
};
