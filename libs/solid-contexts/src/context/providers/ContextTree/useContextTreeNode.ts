import { useContext } from 'solid-js';

import { type ContextNode, ContextNodeCTX } from '../../private';
export const useContextTreeNode = (): ContextNode => {
	const [current] = useContext(ContextNodeCTX) || [];
	if (!current) {
		throw new Error(
			'useContextNode() must be wrapped in <ContextRootProvider/> or <ContextNodeProvider/>',
		);
	}

	return current;
};
