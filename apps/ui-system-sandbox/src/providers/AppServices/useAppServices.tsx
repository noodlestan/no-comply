import { useContext } from 'solid-js';

import { AppServicesContext } from './private';
import { AppServicesAPI } from './types';

export const useAppServices = (): AppServicesAPI => {
    const api = useContext(AppServicesContext);
    if (!('ready' in api)) {
        throw new Error('useAppServices() must be wrapped in <AppServicesProvider/>');
    }
    return api;
};
