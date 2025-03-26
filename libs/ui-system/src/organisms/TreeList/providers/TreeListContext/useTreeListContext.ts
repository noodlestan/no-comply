import { useContext } from 'solid-js';

import type { TreeListContextValue } from '../../private';

import { TreeListContext } from './private';

export const useTreeListContext = (): TreeListContextValue => {
    const context = useContext(TreeListContext);
    if (!context) {
        throw new Error('useTreeListContext() must be wrapped in <TreeListContextProvider/>');
    }
    return context;
};
