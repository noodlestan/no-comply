import { createModalContext } from '@noodlestan/context-ui';
import { type DialogTagName, createAriaDialog } from '@noodlestan/context-ui-aria';
import { createComputedProps, mergeProps } from '@noodlestan/context-ui-types';

import { createFocusTrap } from '../../../focus';
import { createModalDialogMixin } from '../../mixins';

import type { ModalDialogAPI, ModalDialogProps } from './types';

export const createModalDialog = (props: ModalDialogProps = {}): ModalDialogAPI => {
    const modalContext = createModalContext(props);

    const { elProps: ariaProps, labelProps } = createAriaDialog(props);

    const dialogContextProps = {
        ref: modalContext.setDialogRef,
    };
    const dialogMixinProps = mergeProps(
        props,
        createComputedProps({
            active: modalContext.isActive,
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
        component: 'dialog' as DialogTagName,
        onKeyDown: handleKeyDown,
    };
    const localProps = createComputedProps(staticProps, {});

    return {
        containerProps: mergeProps(containerProps, localProps),
        labelProps,
        modalContext,
        closeDialog,
    };
};
