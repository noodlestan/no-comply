import type { Accessor } from 'solid-js';

export type SystemColorSchemeName = 'dark' | 'light' | 'auto';

export type SystemContextServiceAPI = {
    colorScheme: Accessor<SystemColorSchemeName>;
    locale: Accessor<string>;
    hasFocus: Accessor<boolean>;
};
