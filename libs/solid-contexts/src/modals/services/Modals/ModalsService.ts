import { createSignal } from 'solid-js';

import type { ModalContext } from '../../contexts/Modal';

import type { ModalsServiceAPI } from './types';

export const createModalsService = (): ModalsServiceAPI => {
	const [modals, setModals] = createSignal<ModalContext[]>([]);

	const addModal = (options: ModalContext) => {
		setModals(items => {
			return [...items, options];
		});
	};
	const removeModal = (id: string) => {
		setModals(items => {
			return items.filter(item => item.id !== id);
		});
	};

	const getModalIndex = (id: string) => modals().findIndex(item => item.id === id);

	const isModalActive = (id: string) => {
		const m = modals();
		const top = m[m.length - 1];
		return top?.id === id;
	};

	return {
		addModal,
		removeModal,
		getModalIndex,
		isModalActive,
	};
};
