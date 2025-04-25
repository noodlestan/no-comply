import { createFormContext } from '@noodlestan/context-ui';
import { createAriaForm } from '@noodlestan/context-ui-aria';
import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';

import type { FormAPI, FormProps } from './types';

export const createForm = (props: FormProps = {}): FormAPI => {
    const state: { api: FormAPI } = { api: {} as FormAPI };

    const contextValue = createFormContext(props);
    const [context] = contextValue;

    const { elProps: ariaFormProps, labelProps, descriptionProps } = createAriaForm(props);

    const containerStaticProps = {
        component: 'form',
        onSubmit: () => props.onSubmit?.(state.api),
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
        type: 'submit' as const,
    };
    const submitButtonProps = createComputedProps(submitButtonStaticProps, {
        disabled: () => context.isDisabled() || context.isPending(),
    });

    state.api = {
        elProps: mergeProps(ariaFormProps, containerProps),
        labelProps,
        descriptionProps,
        submitButtonProps,
        context,
        contextValue,
    };

    return state.api;
};
