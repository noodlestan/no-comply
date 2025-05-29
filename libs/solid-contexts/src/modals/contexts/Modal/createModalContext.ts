import { uuid } from '@no-comply/solid-primitives';
import { createSignal, onCleanup } from 'solid-js';

import { useModals } from '../../providers';

import type { ModalContext, ModalContextOptions, ModalContextValue } from './types';

export const createModalContext = (options: ModalContextOptions = {}): ModalContextValue => {
    const [isClosed, setIsClosed] = createSignal(false);
    let targetEl: HTMLDialogElement | undefined;
    let resolvePromise: () => void;

    const { addModal, removeModal, getModalIndex, isModalActive: isModalCurrent } = useModals();

    const id = uuid();

    const handleAnimationEnd = () => {
        if (isClosed()) {
            resolvePromise();
        }
    };

    const close = async () => {
        targetEl?.addEventListener('animationend', handleAnimationEnd);
        targetEl?.addEventListener('animationcancel', handleAnimationEnd);
        targetEl?.close();
        setIsClosed(true);
        if (!targetEl) {
            return;
        }
        return new Promise<void>(resolve => (resolvePromise = resolve));
    };

    const setTargetRef = (el: HTMLDialogElement) => {
        targetEl = el;
        targetEl.showModal();
    };

    const context: ModalContext = {
        type: 'modal',
        id,
        setTargetRef,
        index: () => getModalIndex(id),
        isActive: () => isModalCurrent(id),
        sticky: () => Boolean(options.sticky),
        close,
    };

    addModal(context);

    onCleanup(() => {
        removeModal(id);
        targetEl?.removeEventListener('animationend', handleAnimationEnd);
        targetEl?.removeEventListener('animationcancel', handleAnimationEnd);
    });

    return [context];
};
