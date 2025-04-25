import { uuid } from '@noodlestan/context-ui-primitives';
import { createSignal, onCleanup } from 'solid-js';

import { useFormContextMaybe } from '../../private';

import type { FieldContext, FieldContextOptions, FieldContextValue } from './types';

export const createFieldContext = (options: FieldContextOptions = {}): FieldContextValue => {
    const [isTouched, setIsTouched] = createSignal(false);
    const [isModified, setIsModified] = createSignal(false);
    const [isInvalid, setIsInvalid] = createSignal(false);

    const id = uuid();

    let inputEl: HTMLElement;

    const [formContext, formContextOwnerAPI] = useFormContextMaybe() || [];
    // const formGroup = useFormGroupContext();

    const setInputRef = (el: HTMLElement) => {
        inputEl = el;
    };

    const isDisabled = () => {
        if (options.disabled) {
            return true;
        }
        // return Boolean(formGroup?.isDisabled() || formContext?.isDisabled());
        return Boolean(formContext?.isDisabled());
    };

    const isReadonly = () => {
        if (options.disabled) {
            return true;
        }
        return Boolean(
            // formGroup?.isReadonly() ||
            formContext?.isReadonly() ||
                // formGroup?.isPending() ||
                formContext?.isPending(),
        );
    };

    const isPending = () => Boolean(options.pending);

    const isSubmitted = () => Boolean(formContext?.isSubmitted());

    const context: FieldContext = {
        type: 'form-field',
        id,
        setInputRef,
        isDisabled,
        isReadonly,
        isPending,
        isTouched,
        isModified,
        isInvalid,
        isSubmitted,
    };

    formContextOwnerAPI?.addChild(context);

    onCleanup(() => formContextOwnerAPI?.removeChild(context));

    return [context];
};
