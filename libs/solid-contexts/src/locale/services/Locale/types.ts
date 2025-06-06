import type { Accessor } from 'solid-js';

import type { TranslateServiceAPI } from '../TranslateService';

export type LocaleServiceOptions = {
	defaultLocale: string;
	translate: TranslateServiceAPI;
	onSetLocale: (loc: string, asyncSet: () => Promise<void>) => Promise<void>;
};

export type LocaleServiceAPI = {
	setLocale: (loc: string) => Promise<void>;
	locale: Accessor<string>;
	translate: TranslateServiceAPI;
};
