import { useContext } from 'solid-js';

import type { ModeContext } from '../../contexts';

import { ModeContextCTX } from './private';

export const useMode = (): ModeContext => {
    const [context] = useContext(ModeContextCTX) || [];
    if (!context) {
        throw new Error('useMode() must be wrapped in <ModeContextProvider/>');
    }

    return context;
};
