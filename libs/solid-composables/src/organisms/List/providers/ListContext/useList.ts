import { useContext } from 'solid-js';

import type { ListContext } from '../../contexts';

import { ListContextCTX } from './private';

export const useList = (): ListContext => {
    const [context] = useContext(ListContextCTX) || [];
    if (!context) {
        throw new Error('useList() must be wrapped in <ListContextProvider/>');
    }
    return context;
};
