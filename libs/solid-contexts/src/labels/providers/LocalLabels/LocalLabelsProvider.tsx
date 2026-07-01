/* eslint-disable solid/reactivity */
import type { LabelMap } from '@no-comply/solid-primitives';
import { type ParentComponent } from 'solid-js';

import { LocalLabelsCTX } from './private';

type LocalLabelsProviderProps = {
	labels?: LabelMap;
};

export const LocalLabelsProvider: ParentComponent<LocalLabelsProviderProps> = props => {
	return (
		<LocalLabelsCTX.Provider value={props.labels ?? {}}>{props.children}</LocalLabelsCTX.Provider>
	);
};
