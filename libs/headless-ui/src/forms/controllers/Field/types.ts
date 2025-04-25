import type { FieldContext, FieldContextOptions, FieldContextValue } from '@noodlestan/context-ui';
import type { Accessor } from 'solid-js';

export type FieldProps = FieldContextOptions;

export type FieldAPI = {
    elProps: {
        'data-disabled': '' | undefined;
        'data-field-readonly': '' | undefined;
        'data-field-pending': '' | undefined;
        'data-field-touched': '' | undefined;
        'data-field-modified': '' | undefined;
        'data-field-invalid': '' | undefined;
        'data-field-submitted': '' | undefined;
        'data-field-has-feedback': '' | undefined;
    };
    labelProps: {
        for: string;
    };
    hintProps: object;
    inputProps: {
        id: string;
    };
    feedbackProps: object;
    context: FieldContext;
    contextValue: FieldContextValue;
    hasFeedback: Accessor<boolean>;
};
