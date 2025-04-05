import { useContext } from 'solid-js';

import type { ModalsServiceAPI } from '../../services';

import { ModalsContext } from './private';

export const useModals = (): ModalsServiceAPI => {
    const context = useContext(ModalsContext);
    if (!context) {
        throw new Error('useModalsService() must be wrapped in <ModalsServiceProvider/>');
    }

    return context;
};
