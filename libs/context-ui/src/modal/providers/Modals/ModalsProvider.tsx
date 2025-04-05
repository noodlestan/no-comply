import type { ParentComponent } from 'solid-js';

import type { ModalsServiceAPI } from '../../services';

import { ModalsContext } from './private';

type ModalsProviderProps = {
    service: ModalsServiceAPI;
};

export const ModalsProvider: ParentComponent<ModalsProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <ModalsContext.Provider value={props.service}>{props.children}</ModalsContext.Provider>
    );
};
