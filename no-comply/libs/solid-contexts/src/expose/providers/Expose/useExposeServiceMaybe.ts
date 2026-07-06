import { useContext } from 'solid-js';

import type { ExposeServiceAPI } from '../../services';

import { ExposeCTX } from './private';

export const useExposeServiceMaybe = (): ExposeServiceAPI | undefined => {
	return useContext(ExposeCTX);
};
