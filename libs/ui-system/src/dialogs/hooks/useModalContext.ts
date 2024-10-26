import { useContext } from 'solid-js';

// TODO WTF ../private?
import { ModalContext, ModalContextState } from '../private/providers/ModalProvider';

export const useModalContext = (): ModalContextState => useContext(ModalContext);
