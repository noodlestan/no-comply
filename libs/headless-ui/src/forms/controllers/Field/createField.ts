import { createFieldContext, useFormMaybe } from '@noodlestan/context-ui';
import { createComputedProps } from '@noodlestan/context-ui-primitives';

import type { FieldAPI, FieldProps } from './types';

export const createField = (props: FieldProps): FieldAPI => {
    const form = useFormMaybe();

    const contextValue = createFieldContext(props);
    const [context] = contextValue;

    const hasFeedback = () => context.isInvalid() && (!form || form?.isFeedbackEnabled());

    const containerProps = createComputedProps({
        'data-disabled': () => (context.isDisabled() ? '' : undefined),
        'data-field-readonly': () => (context.isReadonly() ? '' : undefined),
        'data-field-pending': () => (context.isPending() ? '' : undefined),
        'data-field-touched': () => (context.isTouched() ? '' : undefined),
        'data-field-modified': () => (context.isModified() ? '' : undefined),
        'data-field-invalid': () => (context.isInvalid() ? '' : undefined),
        'data-field-submitted': () => (context.isSubmitted() ? '' : undefined),
        'data-field-has-feedback': () => (hasFeedback() ? '' : undefined),
    });

    const labelProps = {
        for: context.id,
    };

    const hintProps = {};

    const inputProps = {
        id: context.id,
    };

    const feedbackProps = {};

    return {
        elProps: containerProps,
        labelProps,
        hintProps,
        inputProps,
        feedbackProps,
        context,
        contextValue,
        hasFeedback,
    };
};
