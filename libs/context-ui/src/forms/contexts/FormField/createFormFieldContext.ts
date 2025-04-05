import { createSignal } from 'solid-js';

import type { ContextNode } from '../../../context/private';

import type { FormFieldContext, FormFieldContextOptions } from './types';

export const createFormFieldContext = (
    options: FormFieldContextOptions = {},
    node?: ContextNode,
): FormFieldContext => {
    const [isTouched, setIsTouched] = createSignal(false);
    const [isModified, setIsModified] = createSignal(false);
    const [isInvalid, setIsInvalid] = createSignal(false);

    let inputEl: HTMLElement;

    const form = useFormContext();
    const formGroup = useFormGroupContext();

    const setInputRef = (el: HTMLElement) => {
        inputEl = el;
    };

    const isDisabled = () => {
        if (options.disabled) {
            return true;
        }
        return Boolean(formGroup?.isDisabled() || form?.isDisabled());
    };

    const isReadonly = () => {
        if (options.disabled) {
            return true;
        }
        return Boolean(
            formGroup?.isReadonly() ||
                form?.isReadonly() ||
                formGroup?.isPending() ||
                form?.isPending(),
        );
    };

    const isPending = () => Boolean(options.pending);

    const isSubmitted = () => Boolean(form?.isSubmitted());

    return {
        id: 'foo-form',
        type: 'form-field',
        node,
        setInputRef,
        isDisabled,
        isReadonly,
        isPending,
        isTouched,
        isModified,
        isInvalid,
        isSubmitted,
    };
};
