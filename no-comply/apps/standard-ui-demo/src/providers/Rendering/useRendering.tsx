import { useContext } from 'solid-js';

import { RenderingContextCTX } from './private';
import type { RenderingContext } from './types';

export const useRendering = (): RenderingContext => {
	const context = useContext(RenderingContextCTX);
	if (!context) {
		throw new Error('useRendering() must be wrapped in <RenderingProvider/>');
	}
	return context;
};
