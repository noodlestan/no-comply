import { FormContextProvider } from '@noodlestan/context-ui';
import type { ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import type { FormProps } from './types';

export const Form: ParentComponent<FormProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <FormContextProvider value={props.form.context}>
            <Dynamic {...props.form.containerProps}>{props.children}</Dynamic>
        </FormContextProvider>
    );
};
