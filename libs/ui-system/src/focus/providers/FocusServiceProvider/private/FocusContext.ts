import { createContext } from 'solid-js';

import { FocusServiceAPI } from '../../../services';

export const FocusProviderContext = createContext<FocusServiceAPI>({} as FocusServiceAPI);
