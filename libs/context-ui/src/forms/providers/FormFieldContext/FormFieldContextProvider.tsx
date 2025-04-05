import type { ParentComponent } from 'solid-js';

import type { FormFieldContext as FormFieldContextValue } from '../../contexts';

import { FormFieldContext } from './private';

type FormFieldContextProviderProps = {
    value: FormFieldContextValue;
};

export const FormFieldContextProvider: ParentComponent<FormFieldContextProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <FormFieldContext.Provider value={props.value}>{props.children}</FormFieldContext.Provider>
    );
};
