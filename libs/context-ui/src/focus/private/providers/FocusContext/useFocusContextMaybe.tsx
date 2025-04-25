import { useContext } from 'solid-js';

import type { FocusContextValue } from '../../contexts';

import { FocusContextCTX } from './FocusContextCTX';

export const useFocusContextMaybe = (): FocusContextValue | undefined => {
    return useContext(FocusContextCTX);
};
