/* eslint-disable solid/reactivity */
import { type ParentComponent } from 'solid-js';

import type { LabelMap } from '../../types';

import { LocalLabelsCTX } from './private';

type LocalLabelsProviderProps = {
    labels?: LabelMap;
};

export const LocalLabelsProvider: ParentComponent<LocalLabelsProviderProps> = props => {
    return (
        <LocalLabelsCTX.Provider value={props.labels ?? {}}>
            {props.children}
        </LocalLabelsCTX.Provider>
    );
};
