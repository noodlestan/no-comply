/* eslint-disable solid/reactivity */
import { FormContextProvider } from '@noodlestan/context-ui';
import { type RenderProp, mergeProps } from '@noodlestan/context-ui-primitives';
import { FORM_PROPS, type FormAPI, createForm } from '@noodlestan/headless-ui';
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
    const $ = mergeProps($others, $root);

    return (
        <FormContextProvider context={contextValue}>
            <Dynamic {...$}>{locals.children({ form })}</Dynamic>
        </FormContextProvider>
    );
};
