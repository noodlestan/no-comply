import { useContext } from 'solid-js';

import type { ExposeServiceAPI } from '../../services';

import { ExposeCTX } from './private';

export const useExposeService = (): ExposeServiceAPI => {
    const context = useContext(ExposeCTX);
    if (!context) {
        throw new Error('useExposeService() must be wrapped in <ExposeProvider/>.');
    }
    if (!context.isExposeOn()) {
        throw new Error('useExposeService() unavailable. ExposeServiceAPI:isExposeOn() is false');
    }
    return context;
};
