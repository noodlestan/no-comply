import { createContext } from 'solid-js';

import type { FocusTargetsServiceAPI } from '../../../services';

export const FocusTargetsContext = createContext<FocusTargetsServiceAPI>();
