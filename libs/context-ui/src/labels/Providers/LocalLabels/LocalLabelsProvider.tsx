import { type ParentComponent } from 'solid-js';

import type { LabelMap } from '../../types';

import { LocalLabelsContext } from './private';

type LocalLabelsProviderProps = {
    labels?: LabelMap;
};

export const LocalLabelsProvider: ParentComponent<LocalLabelsProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <LocalLabelsContext.Provider value={props.labels ?? {}}>
            {props.children}
        </LocalLabelsContext.Provider>
    );
};
