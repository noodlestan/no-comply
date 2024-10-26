import { createContext } from 'solid-js';

import { SettingsAPI } from '../types';

export const SettingsContext = createContext<SettingsAPI>({} as SettingsAPI);
