import type { InitOptions, TFunction, TOptions, i18n } from 'i18next';
import type { Accessor, Component, ParentComponent } from 'solid-js';

export type TranslateServiceOptions = {
    component: Component;
    i18next?: {
        instance?: i18n;
        options?: InitOptions;
    };
};

export type TranslationFunction = TFunction;
export type TranslationOptions = TOptions;

export type TranslatecomponentProps = {
    key: string;
    options?: TranslationOptions;
};

export type TranslateComponent = ParentComponent<TranslatecomponentProps>;

export type TranslateServiceAPI = {
    t: Accessor<TranslationFunction>;
    Translate: TranslateComponent;
    setLanguage: (lng: string) => Promise<void>;
    addResources: (
        lng: string,
        ns: string,
        resources: unknown,
        bundleOptions: { deep?: boolean; overwrite?: boolean },
    ) => void;
    getI18next: () => i18n;
};
