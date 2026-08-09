import { createContext } from 'solid-js';

import type { ModalsServiceAPI } from '../../../services';

export const ModalsCTX = createContext<ModalsServiceAPI>();
