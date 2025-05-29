/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import { ContextNodeProvider, createContextNode } from '../../../context';
import type { FormContextValue } from '../../contexts';
import { FormContextCTX } from '../../private';

type FormContextProviderProps = {
    context: FormContextValue;
};

export const FormContextProvider: ParentComponent<FormContextProviderProps> = props => {
    const node = () => createContextNode(props.context[0]);

    return (
        <FormContextCTX.Provider value={props.context}>
            <ContextNodeProvider node={node()}>{props.children}</ContextNodeProvider>
        </FormContextCTX.Provider>
    );
};
