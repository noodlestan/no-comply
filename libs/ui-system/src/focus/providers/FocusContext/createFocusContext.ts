import { useContext } from 'solid-js';

import { FocusParentContext } from './private';
import { FocusContextAPI, FocusContextOptions } from './types';

export const createFocusContext = (options: FocusContextOptions = {}): FocusContextAPI => {
    const parent = useContext(FocusParentContext);
    if (!parent) {
        throw new Error('useFocusContext() must be wrapped in <FocusContextProvider/>');
    }

    return parent.createChildContext(options);
};
