import type { Component, JSX } from 'solid-js';

import type { LocaleServiceAPI } from '../../services';

import { LocaleContext } from './private';

type LocaleServiceProps = {
    localeService: LocaleServiceAPI;
    children?: JSX.Element;
};

export const LocaleProvider: Component<LocaleServiceProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <LocaleContext.Provider value={props.localeService}>
            {props.children}
        </LocaleContext.Provider>
    );
};
