import type { Accessor } from 'solid-js';

import type { ExposableAPI } from '../../private';
import type { ExposedAPI } from '../../types';

export type ExposeServiceOptions = { expose: boolean };

export type ExposedItem = [ExposableAPI, ExposedAPI];

export type ExposeServiceAPI = {
	isExposeOn: () => boolean;
	track: (exposable: ExposableAPI, api: ExposedAPI) => void;
	untrack: (exposable: ExposableAPI) => void;
	list: Accessor<ExposedItem[]>;
	byId: (id: string) => ExposedItem | undefined;
};
