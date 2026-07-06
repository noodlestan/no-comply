import { createContext } from 'solid-js';

import type { FocusTargetsServiceAPI } from '../../../services';

export const FocusTargetsCTX = createContext<FocusTargetsServiceAPI>();
