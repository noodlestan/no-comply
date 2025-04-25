/* eslint-disable solid/reactivity */
import { FormContextProvider } from '@noodlestan/context-ui';
import { createForm } from '@noodlestan/headless-ui';
import type { Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import type { FormProps } from './types';

export const Form: Component<FormProps> = props => {
    const form = createForm(props);

    return (
        <FormContextProvider context={form.contextValue}>
            <Dynamic {...form.elProps}>{props.children(form)}</Dynamic>
        </FormContextProvider>
    );
};
