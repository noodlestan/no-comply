import { createFieldContext, useFormMaybe } from '@no-comply/solid-contexts';
import { createComputedProps, mergeProps } from '@no-comply/solid-primitives';
import { createSignal } from 'solid-js';

import type { FieldAPI, FieldProps } from './types';

export const createField = (props: FieldProps): FieldAPI => {
    const [isTouched, setIsTouched] = createSignal(false);
    const [isModified, setIsModified] = createSignal(false);
    const [isInvalid, setIsInvalid] = createSignal(false);

    let inputEl: HTMLElement;

    const setInputRef = (el: HTMLElement) => {
        inputEl = el;
        // WIP
        console.info(setIsTouched, setIsInvalid, setIsModified, inputEl);
    };

    const form = useFormMaybe();

    const fieldContextState = createComputedProps({
        touched: isTouched,
        modified: isModified,
        invalid: isInvalid,
    });
    const fieldContextOptions = mergeProps(props, fieldContextState);
    const contextValue = createFieldContext(fieldContextOptions);
    const [context] = contextValue;

    const hasFeedback = () => context.isInvalid() && (!form || form?.isFeedbackEnabled());
    const $localRoot = createComputedProps({
        'data-disabled': () => (context.isDisabled() ? '' : undefined),
        'data-field-readonly': () => (context.isReadonly() ? '' : undefined),
        'data-field-pending': () => (context.isPending() ? '' : undefined),
        'data-field-touched': () => (context.isTouched() ? '' : undefined),
        'data-field-modified': () => (context.isModified() ? '' : undefined),
        'data-field-invalid': () => (context.isInvalid() ? '' : undefined),
        'data-field-submitted': () => (context.isSubmitted() ? '' : undefined),
        'data-field-has-feedback': () => (hasFeedback() ? '' : undefined),
    });

    const $label = {
        for: context.id,
    };

    const $description = {};

    const $input = {
        id: context.id,
        ref: setInputRef,
        onInput: () => setIsTouched(true),
    };

    const $feedback = {};

    return {
        $root: $localRoot,
        $label,
        $description,
        $input,
        $feedback,
        context,
        contextValue,
        hasFeedback,
    };
};
