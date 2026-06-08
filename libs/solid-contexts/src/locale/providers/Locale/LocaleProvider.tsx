/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import type { LocaleServiceAPI } from '../../services';

import { LocaleCTX } from './private';

type LocaleProviderProps = {
	service: LocaleServiceAPI;
};

export const LocaleProvider: ParentComponent<LocaleProviderProps> = props => {
	return <LocaleCTX.Provider value={props.service}>{props.children}</LocaleCTX.Provider>;
};
