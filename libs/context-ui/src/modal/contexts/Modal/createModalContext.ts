import { uuid } from '@noodlestan/context-ui-types';
import { onCleanup } from 'solid-js';

import type { ContextNode } from '../../../context/private';
import { useModals } from '../../providers';

import type { ModalContext, ModalContextOptions } from './types';

export const createModalContext = (
    options: ModalContextOptions = {},
    node?: ContextNode,
): ModalContext => {
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
        node,
        setDialogRef,
        index: () => getModalIndex(id),
        isActive: () => isModalCurrent(id),
        sticky: () => Boolean(options.sticky),
        close,
    };

    addModal(context);

    onCleanup(() => removeModal(id));

    return context;
};
