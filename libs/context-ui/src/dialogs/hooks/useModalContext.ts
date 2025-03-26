import { useContext } from 'solid-js';

// TODO WTF ../private?
import { ModalContext, type ModalContextState } from '../private';

export const useModalContext = (): ModalContextState => useContext(ModalContext);
