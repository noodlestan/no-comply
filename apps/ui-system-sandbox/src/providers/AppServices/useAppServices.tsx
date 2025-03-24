import { useContext } from 'solid-js';

import { AppServicesContext } from './private';
import type { AppServicesAPI } from './types';

export const useAppServices = (): AppServicesAPI => {
    const context = useContext(AppServicesContext);
    if (!context) {
        throw new Error('useAppServices() must be wrapped in <AppServicesProvider/>');
    }
    return context;
};
