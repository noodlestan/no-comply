import type { i18n } from 'i18next';
import { useContext } from 'solid-js';

import type { TranslateComponent, TranslationFunction } from '../../services';

import { LocaleCTX } from './private';

export type TranslateContext = {
    t: TranslationFunction;
    i18next: i18n;
    Translate: TranslateComponent;
};

export const useTranslate = (): TranslateContext => {
    const context = useContext(LocaleCTX);
    if (!context) {
        throw new Error('useTranslate() must be wrapped in <LocaleProvider/>');
    }
    const { translate } = context;
    return {
        t: translate.t(),
        i18next: translate.getI18next(),
        Translate: translate.Translate,
    };
};
