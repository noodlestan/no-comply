import { useContext } from 'solid-js';

import { SystemUIContext } from './private';
import { SystemUIContextAPI } from './types';

export const useSystemUIContext = (): SystemUIContextAPI => {
    const context = useContext(SystemUIContext);
    if (!context) {
        throw new Error('useSystemUIContext() must be wrapped in <SystemUIProvider/>');
    }
    return context;
};
