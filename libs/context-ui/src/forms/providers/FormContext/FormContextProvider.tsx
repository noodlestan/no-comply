import type { ParentComponent } from 'solid-js';

import type { FormContext as FormContextValue } from '../../contexts';

import { FormContext } from './private';

type FormContextProviderProps = {
    value: FormContextValue;
};

export const FormContextProvider: ParentComponent<FormContextProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <FormContext.Provider value={props.value}>{props.children}</FormContext.Provider>
    );
};
