import type { ParentComponent } from 'solid-js';

import { createContextValuesService } from '../../private';

import { ContextValuesContext } from './private/ContextValuesContext';

export const ContextValuesProvider: ParentComponent = props => {
    const service = createContextValuesService();
    return (
        // eslint-disable-next-line solid/reactivity
        <ContextValuesContext.Provider value={service}>
            {props.children}
        </ContextValuesContext.Provider>
    );
};
