import { useContext } from 'solid-js';

import type { ModalContext } from '../../contexts';

import { ModalContextCTX } from './private';

export const useModal = (): ModalContext => {
	const [context] = useContext(ModalContextCTX) || [];
	if (!context) {
		throw new Error('useModal() must be wrapped in <ModalContextProvider/>');
	}

	return context;
};
