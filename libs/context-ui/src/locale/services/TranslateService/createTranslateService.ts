import i18next, { type i18n } from 'i18next';
import { createSignal } from 'solid-js';

import type { TranslateServiceAPI, TranslateServiceOptions, TranslationFunction } from './types';

export const createTranslateService = (options: TranslateServiceOptions): TranslateServiceAPI => {
    const noop = (() => undefined) as TranslationFunction;
    const [translate, setTranslate] = createSignal<TranslationFunction>(noop);

    const { instance: maybeInstance, options: maybeOptions } = options.i18next ?? {};

    const instance = maybeInstance ?? i18next;
    instance.on('loaded', () => setTranslate(() => instance.t));
    instance.init(maybeOptions ?? {}, (_, t) => setTranslate(() => t));

    const setLanguage = async (lng: string) => {
        const t = await instance.changeLanguage(lng);
        setTranslate(() => t);
    };

    const addResources = (
        lng: string,
        ns: string,
        resources: unknown,
        bundleOptions: { deep?: boolean; overwrite?: boolean } = {},
    ): i18n => {
        return instance.addResourceBundle(
            lng,
            ns,
            resources,
            bundleOptions.deep,
            bundleOptions.overwrite,
        );
    };

    const api: TranslateServiceAPI = {
        t: translate,
        Translate: options.component,
        setLanguage,
        addResources,
        getI18next: () => instance,
    };

    return api;
};
