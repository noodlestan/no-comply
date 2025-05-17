import { useContext } from 'solid-js';

import type { OverflowItemsContextValue } from '../../contexts';

import { OverflowItemsContextCTX } from './private';

export const useOverflowItemsMaybe = (): OverflowItemsContextValue | undefined => {
    return useContext(OverflowItemsContextCTX);
};
