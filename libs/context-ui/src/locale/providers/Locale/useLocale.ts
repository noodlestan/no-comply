import { useContext } from 'solid-js';

import { type LocaleServiceAPI } from '../../services';

import { LocaleCTX } from './private';

export const useLocale = (): LocaleServiceAPI => {
    const context = useContext(LocaleCTX);
    if (!context) {
        throw new Error('useLocale() must be wrapped in <LocaleProvider/>');
    }
    return context;
};
