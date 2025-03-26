import type { Component, JSX } from 'solid-js';

import { createContextValuesService } from '../../private';

import { ContextValuesContext } from './private/ContextValuesContext';

type ContextValuesProviderProps = {
    children?: JSX.Element;
};

export const ContextValuesProvider: Component<ContextValuesProviderProps> = props => {
    const service = createContextValuesService();
    return (
        // eslint-disable-next-line solid/reactivity
        <ContextValuesContext.Provider value={service}>
            {props.children}
        </ContextValuesContext.Provider>
    );
};
