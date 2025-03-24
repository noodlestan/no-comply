import { type Accessor, createSignal, onCleanup } from 'solid-js';

export const createSystemLocaleSignal = (): Accessor<string> => {
    const [locale, setLocale] = createSignal(navigator.language);

    const updateLocale = () => {
        setLocale(navigator.language);
    };

    window.addEventListener('languagechange', updateLocale);
    onCleanup(() => window.removeEventListener('languagechange', updateLocale));

    return locale;
};
