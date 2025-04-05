import type { ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import type { FormFieldBaseProps } from './types';

export const FormFieldBase: ParentComponent<FormFieldBaseProps> = props => {
    return (
        <FormFieldContextProvider value={props.field.context}>
            <Dynamic component="div" {...props.field.containerProps}>
                {props.children}
            </Dynamic>
        </FormFieldContextProvider>
    );
};
