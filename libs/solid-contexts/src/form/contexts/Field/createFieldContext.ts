import { uuid } from '@no-comply/solid-primitives';
import { onCleanup } from 'solid-js';

import { useFormContextMaybe } from '../../private';

import type { FieldContext, FieldContextOptions, FieldContextValue } from './types';

export const createFieldContext = (options: FieldContextOptions = {}): FieldContextValue => {
    const id = uuid();

    const [formContext, formContextOwnerAPI] = useFormContextMaybe() || [];
    // const formGroup = useFormGroupContext();

    const isRequired = () => Boolean(options.required);

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
    const isTouched = () => Boolean(options.touched);
    const isModified = () => Boolean(options.modified);
    const isInvalid = () => Boolean(options.invalid);

    const context: FieldContext = {
        type: 'form-field',
        id,
        isRequired,
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
