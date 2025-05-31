/* eslint-disable solid/reactivity */
import { FORM_PROPS, type FormAPI, createForm } from '@no-comply/solid-composables';
import { FormContextProvider } from '@no-comply/solid-contexts';
import { type RenderProp, combineProps } from '@no-comply/solid-primitives';
import { type Component, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import type { FormProps } from './types';

type ChildrenProps = {
    form: FormAPI;
};

type Props = FormProps & {
    children: RenderProp<ChildrenProps>;
};

export const Form: Component<Props> = props => {
    const [locals, $others] = splitProps(props, [...FORM_PROPS, 'children']);

    const form = createForm(locals);
    const { $root, contextValue } = form;
    const $ = combineProps($others, $root);

    return (
        <FormContextProvider context={contextValue}>
            <Dynamic {...$}>{locals.children({ form })}</Dynamic>
        </FormContextProvider>
    );
};
