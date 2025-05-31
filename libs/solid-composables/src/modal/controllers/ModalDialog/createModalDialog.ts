import { createAriaDialog } from '@no-comply/solid-accessibility';
import { createModalContext } from '@no-comply/solid-contexts';
import { computedProps, mergeProps } from '@no-comply/solid-primitives';

import { createFocusTrap } from '../../../focus';

import type { ModalDialogAPI, ModalDialogProps } from './types';

export const createModalDialog = (props: ModalDialogProps = {}): ModalDialogAPI => {
    const state: { api: ModalDialogAPI } = { api: {} as ModalDialogAPI };

    const contextValue = createModalContext(props);
    const [context] = contextValue;

    const { $root: $dialogRoot, $label, $description } = createAriaDialog(props);

    const $dialogContextRoot = {
        ref: context.setTargetRef,
    };

    const { $root: $focusTrapRoot } = createFocusTrap(props);

    const stopPropagation = (ev: Event) => ev.stopImmediatePropagation();

    const handleKeyDown = async (ev: KeyboardEvent) => {
        if (ev.key === 'Escape') {
            props.onDiscard?.(context);
        }
    };

    const $static = {
        component: 'dialog' as const,
        onKeyDown: handleKeyDown,
        onKeyUp: stopPropagation,
        onKeyPress: stopPropagation,
    };
    const $root = computedProps($static, {
        'data-modal-dialog-is-active': () => (context.isActive() ? '' : undefined),
    });

    state.api = {
        $root: mergeProps($dialogRoot, $dialogContextRoot, $focusTrapRoot, $root),
        $label,
        $description,
        context,
        contextValue,
    };

    return state.api;
};
