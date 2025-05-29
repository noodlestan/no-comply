/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import type { ModalsServiceAPI } from '../../services';

import { ModalsCTX } from './private';

type ModalsProviderProps = {
    service: ModalsServiceAPI;
};

export const ModalsProvider: ParentComponent<ModalsProviderProps> = props => {
    return <ModalsCTX.Provider value={props.service}>{props.children}</ModalsCTX.Provider>;
};
