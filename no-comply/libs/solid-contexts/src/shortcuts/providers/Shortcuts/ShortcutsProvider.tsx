/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import type { ShortcutsServiceAPI } from '../../services';

import { ShortcutsCTX } from './private';

type SettingsProviderProps = {
	service: ShortcutsServiceAPI;
};

export const ShortcutsProvider: ParentComponent<SettingsProviderProps> = props => {
	return <ShortcutsCTX.Provider value={props.service}>{props.children}</ShortcutsCTX.Provider>;
};
