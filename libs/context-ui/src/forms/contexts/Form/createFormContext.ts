import { uuid } from '@noodlestan/context-ui-types';
import { createSignal } from 'solid-js';

import type { ContextNode } from '../../../context/private';
import type { FormFieldContext } from '../FormField';

import type { FormContext, FormContextOptions } from './types';

export const createFormContext = (
    options: FormContextOptions = {},
    node?: ContextNode,
): FormContext => {
    const [isSubmitted, setIsSubmitted] = createSignal(false);

    const id = uuid();

    const isDisabled = () => Boolean(options.disabled);

    const isReadonly = () => Boolean(options.readonly);

    const isPending = () => {
        if (options.pending) {
            return true;
        }
        return Boolean(
            node?.hasChildWith<FormFieldContext>('form-field', (_, field) => field.isPending()),
        );
    };

    const isTouched = () =>
        Boolean(
            node?.hasChildWith<FormFieldContext>('form-field', (_, field) => field.isTouched()),
        );

    const isModified = () =>
        Boolean(
            node?.hasChildWith<FormFieldContext>('form-field', (_, field) => field.isModified()),
        );

    const isInvalid = () =>
        Boolean(
            node?.hasChildWith<FormFieldContext>('form-field', (_, field) => field.isInvalid()),
        );

    const isFeedbackEnabled = () => options.enableFeedack || isSubmitted();

    const submit = () => {
        setIsSubmitted(true);
    };

    const reset = () => {
        setIsSubmitted(false);
    };

    return {
        type: 'form',
        id,
        node,
        isDisabled,
        isReadonly,
        isPending,
        isTouched,
        isModified,
        isInvalid,
        isSubmitted,
        isFeedbackEnabled,
        submit,
        reset,
    };
};
