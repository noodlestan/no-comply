import { inject } from '../../../providers';
import type { TransitionState } from '../../../transitions';
import { TransitionGroupsService } from '../../../transitions';
import { TRANSITION_GROUP, modalsStore } from '../../private';
import type { ModalOptions } from '../../types';

interface ModalsServiceInterface {
    addModal: (id: string, options: ModalOptions) => void;
    deleteModal: (id: string) => void;
    getModalIndex: (id: string) => number;
    getModalTransition: (id: string) => TransitionState | undefined;
    isModalCurrent: (id: string) => boolean;
    isModalDimmed: (id: string) => boolean;
    isModalVisible: (id: string) => boolean;
}

const {
    addModal,
    deleteModal,
    getCurrentModal,
    getHiddenModal,
    getModal,
    getModalIndex,
    isModalCurrent,
    isModalDimmed,
    isModalVisible,
} = modalsStore;

export const createModalsService = (): ModalsServiceInterface => {
    const { getTransition, createTransition, resetTransitionGroup } =
        // TODO replace by useTransitionGroups()
        inject(TransitionGroupsService);

    return {
        addModal: (id: string, options: ModalOptions) => {
            resetTransitionGroup(TRANSITION_GROUP);
            const currentModal = getCurrentModal();
            if (currentModal) {
                createTransition(TRANSITION_GROUP, currentModal.id, 'hide', {});
            }
            createTransition(TRANSITION_GROUP, id, 'in', {});
            addModal(id, options);
        },
        deleteModal: (id: string) => {
            const modal = getModal(id);
            if (!modal) {
                return;
            }
            const hiddenModal = modal.current ? getHiddenModal() : undefined;
            if (hiddenModal) {
                createTransition(TRANSITION_GROUP, hiddenModal.id, 'unhide', {});
            }
            createTransition(TRANSITION_GROUP, id, 'out', {});
            deleteModal(id);
        },
        getModalIndex: (id: string) => getModalIndex(id),
        getModalTransition: (id: string) => getTransition(TRANSITION_GROUP, id),
        isModalCurrent,
        isModalDimmed,
        isModalVisible,
    };
};
