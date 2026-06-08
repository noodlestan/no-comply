import { useContext } from 'solid-js';

import { ContextRootCTX } from '../../private';
import type { ContextNode } from '../../types';

export const useContextTreeRoot = (): ContextNode => {
	const [root] = useContext(ContextRootCTX) || [];
	if (!root) {
		throw new Error('useContextRoot() must be wrapped in <ContextRootProvider/>');
	}

	return root;
};
