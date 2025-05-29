import type {
    FieldContext,
    FieldContextOptions,
    FieldContextValue,
} from '@no-comply/solid-contexts';
import type { Accessor } from 'solid-js';

export type FieldProps = FieldContextOptions;

export type FieldAPI = {
    $root: {
        'data-disabled': '' | undefined;
        'data-field-readonly': '' | undefined;
        'data-field-pending': '' | undefined;
        'data-field-touched': '' | undefined;
        'data-field-modified': '' | undefined;
        'data-field-invalid': '' | undefined;
        'data-field-submitted': '' | undefined;
        'data-field-has-feedback': '' | undefined;
    };
    $label: {
        for: string;
    };
    $description: object;
    $input: {
        id: string;
        ref: (el: HTMLElement) => void;
    };
    $feedback: object;
    context: FieldContext;
    contextValue: FieldContextValue;
    hasFeedback: Accessor<boolean>;
};
