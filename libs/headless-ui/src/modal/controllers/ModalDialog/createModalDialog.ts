import { createModalContext } from '@noodlestan/context-ui';
import { createAriaDialog } from '@noodlestan/context-ui-aria';
import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';

import { createFocusTrap } from '../../../focus';
import { createModalDialogMixin } from '../../mixins';

import type { ModalDialogAPI, ModalDialogProps } from './types';

export const createModalDialog = (props: ModalDialogProps = {}): ModalDialogAPI => {
    const modalContext = createModalContext(props);
    const [context] = modalContext;

    const { elProps: ariaProps, labelProps, descriptionProps } = createAriaDialog(props);

    const dialogContextProps = {
        ref: context.setDialogRef,
    };
    const dialogMixinProps = mergeProps(
        props,
        createComputedProps({
            active: context.isActive,
        }),
    );
    const { elProps: dialogMixinElProps, closeDialog } = createModalDialogMixin(dialogMixinProps);

    const { elProps: focusTrapProps } = createFocusTrap(props);
    const containerProps = mergeProps(
        ariaProps,
        dialogContextProps,
        dialogMixinElProps,
        focusTrapProps,
    );

    const handleKeyDown = async (ev: KeyboardEvent) => {
        if (ev.key === 'Escape') {
            await close();
            props.onDiscard?.();
        }
    };

    const staticProps = {
        component: 'dialog' as const,
        onKeyDown: handleKeyDown,
    };
    const localProps = createComputedProps(staticProps, {});

    return {
        elProps: mergeProps(containerProps, localProps),
        labelProps,
        descriptionProps,
        modalContext,
        closeDialog,
    };
};
