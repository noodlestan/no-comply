import { useContext } from 'solid-js';

import type { ModalsServiceAPI } from '../../services';

import { ModalsCTX } from './private';

export const useModals = (): ModalsServiceAPI => {
    const context = useContext(ModalsCTX);
    if (!context) {
        throw new Error('useModalsService() must be wrapped in <ModalsServiceProvider/>');
    }

    return context;
};
