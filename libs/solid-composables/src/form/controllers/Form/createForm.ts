import { createAriaForm } from '@no-comply/solid-accessibility';
import { createFormContext } from '@no-comply/solid-contexts';
import { computedProps, mergeProps } from '@no-comply/solid-primitives';

import type { FormAPI, FormProps } from './types';

export const createForm = (props: FormProps = {}): FormAPI => {
    const state: { api: FormAPI } = { api: {} as FormAPI };

    const contextValue = createFormContext(props);
    const [context] = contextValue;

    const { $root: $formRoot, $label, $description } = createAriaForm(props);

    const $static = {
        onSubmit: () => props.onSubmit?.(state.api),
    };
    const $root = computedProps($static, {
        'data-disabled': () => (context.isDisabled() ? '' : undefined),
        'data-form-readonly': () => (context.isReadonly() ? '' : undefined),
        'data-form-pending': () => (context.isPending() ? '' : undefined),
        'data-form-touched': () => (context.isTouched() ? '' : undefined),
        'data-form-modified': () => (context.isModified() ? '' : undefined),
        'data-form-invalid': () => (context.isInvalid() ? '' : undefined),
        'data-form-submitted': () => (context.isSubmitted() ? '' : undefined),
        'data-form-feedback-enabled': () => (context.isFeedbackEnabled() ? '' : undefined),
    });

    const $submitButtonStatic = {
        type: 'submit' as const,
    };
    const $submitButton = computedProps($submitButtonStatic, {
        disabled: () => context.isDisabled() || context.isPending(),
    });

    state.api = {
        $root: mergeProps($formRoot, $root),
        $label,
        $description,
        $submitButton,
        context,
        contextValue,
    };

    return state.api;
};
