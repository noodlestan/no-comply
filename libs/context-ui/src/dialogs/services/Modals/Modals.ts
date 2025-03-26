import { modalsStore } from '../../private';
import type { ModalOptions } from '../../types';

export interface ModalsServiceAPI {
    addModal: (id: string, options: ModalOptions) => void;
    deleteModal: (id: string) => void;
    getModalIndex: (id: string) => number;
    isModalCurrent: (id: string) => boolean;
    isModalDimmed: (id: string) => boolean;
    isModalVisible: (id: string) => boolean;
}

const {
    addModal,
    deleteModal,
    getModal,
    getModalIndex,
    isModalCurrent,
    isModalDimmed,
    isModalVisible,
} = modalsStore;

export const createModalsService = (): ModalsServiceAPI => {
    return {
        addModal: (id: string, options: ModalOptions) => {
            addModal(id, options);
        },
        deleteModal: (id: string) => {
            const modal = getModal(id);
            if (!modal) {
                return;
            }
            deleteModal(id);
        },
        getModalIndex: (id: string) => getModalIndex(id),
        isModalCurrent,
        isModalDimmed,
        isModalVisible,
    };
};
