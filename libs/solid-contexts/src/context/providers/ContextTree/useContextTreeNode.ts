import { useContext } from 'solid-js';

import { ContextNodeCTX } from '../../private';
import type { ContextNode } from '../../types';

export const useContextTreeNode = (): ContextNode => {
	const [current] = useContext(ContextNodeCTX) || [];
	if (!current) {
		throw new Error(
			'useContextNode() must be wrapped in <ContextRootProvider/> or <ContextNodeProvider/>',
		);
	}

	return current;
};
