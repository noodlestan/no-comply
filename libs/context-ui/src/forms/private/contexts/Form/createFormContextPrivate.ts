import { uuid } from '@noodlestan/context-ui-primitives';
import { createSignal } from 'solid-js';

import type { FieldContext } from '../../../contexts';

import type {
    FormContext,
    FormContextOptions,
    FormContextOwnerAPI,
    FormContextValue,
} from './types';

export const createFormContextPrivate = (options: FormContextOptions = {}): FormContextValue => {
    const [children, setChildren] = createSignal<FieldContext[]>([]);
    const [isSubmitted, setIsSubmitted] = createSignal(false);

    const id = uuid();

    const isDisabled = () => Boolean(options.disabled);

    const isReadonly = () => Boolean(options.readonly);

    const isPending = () => {
        if (options.pending) {
            return true;
        }
        return Boolean(children().find(field => field.isPending()));
    };

    const isTouched = () => Boolean(children().find(field => field.isTouched()));

    const isModified = () => Boolean(children().find(field => field.isModified()));

    const isInvalid = () => Boolean(children().find(field => field.isInvalid()));

    const isFeedbackEnabled = () => options.enableFeedack || isSubmitted();

    const submit = () => {
        setIsSubmitted(true);
    };

    const reset = () => {
        setIsSubmitted(false);
    };

    const context: FormContext = {
        type: 'form',
        id,
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

    const addChild = (child: FieldContext) => {
        setChildren(prev => [...prev, child]);
    };

    const removeChild = (child: FieldContext) => {
        setChildren(prev => prev.filter(context => context !== child));
    };

    const ownerAPI: FormContextOwnerAPI = {
        addChild,
        removeChild,
    };

    return [context, ownerAPI];
};
