import { useContext } from 'solid-js';

import type { SurfaceContext } from '../../contexts';

import { SurfaceContextCTX } from './private';

export const useSurface = (): SurfaceContext => {
	const [context] = useContext(SurfaceContextCTX) || [];
	if (!context) {
		throw new Error('useSurface() must be wrapped in <SurfaceContextProvider/>');
	}

	return context;
};
