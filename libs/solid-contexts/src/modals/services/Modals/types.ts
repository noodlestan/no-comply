import type { ModalContext, ModalContextOptions } from '../../contexts/Modal';

export type ModalOptions = Partial<ModalContextOptions>;

export type ModalsServiceAPI = {
    addModal: (options: ModalContext) => void;
    removeModal: (id: string) => void;
    getModalIndex: (id: string) => number;
    isModalActive: (id: string) => boolean;
};
