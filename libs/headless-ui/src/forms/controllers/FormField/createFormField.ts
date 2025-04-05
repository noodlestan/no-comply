import { createFormFieldContext } from '@noodlestan/context-ui';

import type { FormFieldAPI, FormFieldProps } from './types';

export const createFormField = (props: FormFieldProps): FormFieldAPI => {
    const context = createFormFieldContext(props);

    const containerProps = {};

    const labelProps = {
        for: context.id,
    };

    const hintProps = {};

    const inputProps = {};

    const feedbackProps = {};

    return {
        containerProps,
        labelProps,
        hintProps,
        inputProps,
        feedbackProps,
        context,
    };
};
