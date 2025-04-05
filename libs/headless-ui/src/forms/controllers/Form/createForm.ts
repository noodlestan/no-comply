import { createFormContext } from '@noodlestan/context-ui';
import { createAriaForm } from '@noodlestan/context-ui-aria';
import { createComputedProps, mergeProps } from '@noodlestan/context-ui-types';

import type { FormAPI, FormProps } from './types';

export const createForm = (props: FormProps = {}): FormAPI => {
    const context = createFormContext(props);

    const { elProps: ariaFormProps, labelProps } = createAriaForm(props);

    const containerStaticProps = {
        component: 'form',
    };
    const containerProps = createComputedProps(containerStaticProps, {
        'data-disabled': () => (context.isDisabled() ? '' : undefined),
        'data-form-readonly': () => (context.isReadonly() ? '' : undefined),
        'data-form-pending': () => (context.isPending() ? '' : undefined),
        'data-form-touched': () => (context.isTouched() ? '' : undefined),
        'data-form-modified': () => (context.isModified() ? '' : undefined),
        'data-form-invalid': () => (context.isInvalid() ? '' : undefined),
        'data-form-submitted': () => (context.isSubmitted() ? '' : undefined),
        'data-form-feedback-enabled': () => (context.isFeedbackEnabled() ? '' : undefined),
    });

    const submitButtonStaticProps = {
        type: 'submit',
    };
    const submitButtonProps = createComputedProps(submitButtonStaticProps, {
        disabled: () => props.disabled,
    });

    return {
        containerProps: mergeProps(ariaFormProps, containerProps),
        labelProps,
        submitButtonProps,
        context,
    };
};
