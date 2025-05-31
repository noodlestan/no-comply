/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import { type ExposeServiceAPI } from '../../services';

import { ExposeCTX } from './private';

type ExposeProviderProps = {
    service: ExposeServiceAPI;
};

export const ExposeProvider: ParentComponent<ExposeProviderProps> = props => {
    return <ExposeCTX.Provider value={props.service}>{props.children}</ExposeCTX.Provider>;
};
