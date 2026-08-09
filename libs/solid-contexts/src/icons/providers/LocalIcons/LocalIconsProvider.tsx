/* eslint-disable solid/reactivity */
import type { IconMap } from '@no-comply/solid-primitives';
import { type ParentComponent } from 'solid-js';

import { LocalIconsCTX } from './private';

type LocalIconsProviderProps = {
	icons?: IconMap;
};

export const LocalIconsProvider: ParentComponent<LocalIconsProviderProps> = props => {
	return (
		<LocalIconsCTX.Provider value={props.icons ?? {}}>{props.children}</LocalIconsCTX.Provider>
	);
};
