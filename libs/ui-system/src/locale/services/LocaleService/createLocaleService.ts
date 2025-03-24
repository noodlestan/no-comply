import { createSignal } from 'solid-js';

import type { LocaleServiceAPI, LocaleServiceOptions } from './types';

export const createLocaleService = (options: LocaleServiceOptions): LocaleServiceAPI => {
    const { onSetLocale, translate, defaultLocale } = options;

    const [locale, setLocale] = createSignal<string>(defaultLocale);

    const setCurrentLocale = async (locale: string) => {
        await onSetLocale(locale, async () => {
            await translate.setLanguage(locale);
            setLocale(locale);
        });
    };

    const api: LocaleServiceAPI = {
        setLocale: setCurrentLocale,
        locale,
        translate,
    };

    return api;
};
