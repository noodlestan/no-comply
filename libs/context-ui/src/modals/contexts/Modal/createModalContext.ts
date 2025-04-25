import { uuid } from '@noodlestan/context-ui-primitives';
import { onCleanup } from 'solid-js';

import { useModals } from '../../providers';

import type { ModalContext, ModalContextOptions, ModalContextValue } from './types';

export const createModalContext = (options: ModalContextOptions = {}): ModalContextValue => {
    let targetEl: HTMLDialogElement;

    const { addModal, removeModal, getModalIndex, isModalActive: isModalCurrent } = useModals();

    const id = uuid();

    const setDialogRef = (el: HTMLDialogElement) => {
        targetEl = el;
        targetEl.showModal();
    };

    const close = () => {
        targetEl.close();
    };

    const context: ModalContext = {
        type: 'modal',
        id,
        setDialogRef,
        index: () => getModalIndex(id),
        isActive: () => isModalCurrent(id),
        sticky: () => Boolean(options.sticky),
        close,
    };

    addModal(context);

    onCleanup(() => removeModal(id));

    return [context];
};
