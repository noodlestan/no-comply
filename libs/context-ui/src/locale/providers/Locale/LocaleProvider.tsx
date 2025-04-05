import type { ParentComponent } from 'solid-js';

import type { LocaleServiceAPI } from '../../services';

import { LocaleContext } from './private';

type LocaleProviderProps = {
    service: LocaleServiceAPI;
};

export const LocaleProvider: ParentComponent<LocaleProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <LocaleContext.Provider value={props.service}>{props.children}</LocaleContext.Provider>
    );
};
