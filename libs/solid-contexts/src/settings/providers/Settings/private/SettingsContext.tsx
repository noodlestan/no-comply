import { createContext } from 'solid-js';

import type { SettingsServiceAPI } from '../../../services';

export const SettingsContext = createContext<SettingsServiceAPI>();
