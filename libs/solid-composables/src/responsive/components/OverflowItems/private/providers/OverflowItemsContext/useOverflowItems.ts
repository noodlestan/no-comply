import { useContext } from 'solid-js';

import type { OverflowItemsContextValue } from '../../contexts';

import { OverflowItemsContextCTX } from './private';

export const useOverflowItems = (): OverflowItemsContextValue => {
	const contextValue = useContext(OverflowItemsContextCTX);
	if (!contextValue) {
		throw new Error('useOverflowItems() must be wrapped in <OverflowItemsContextProvider/>');
	}
	return contextValue;
};
