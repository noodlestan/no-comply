import { createBaseFocusContextAPI } from './private';
import { FocusContextAPI, FocusContextOptions } from './types';

export const createRootFocusContext = (options: FocusContextOptions = {}): FocusContextAPI => {
    return createBaseFocusContextAPI(options);
};
