import { Accessor, createEffect, on, onCleanup } from 'solid-js';

import { ModalsServiceAPI } from '../services';
import { ModalOptions } from '../types';

export const useModalShowEffect = (
    show: Accessor<boolean>,
    id: string,
    options: ModalOptions,
): void => {
    // TODO replace by useModals()
    const { addModal, deleteModal } = {} as ModalsServiceAPI;

    onCleanup(() => {
        if (show()) {
            deleteModal(id);
        }
    });

    createEffect(
        on(show, (value, previous) => {
            if (value && !previous) {
                addModal(id, options);
            } else if (!value && previous) {
                deleteModal(id);
            }
        }),
    );
};
