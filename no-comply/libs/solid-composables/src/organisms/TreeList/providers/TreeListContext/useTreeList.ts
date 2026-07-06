import { useContext } from 'solid-js';

import type { TreeListContext } from '../../contexts';

import { TreeListContextCTX } from './private';

export const useTreeList = (): TreeListContext => {
	const [context] = useContext(TreeListContextCTX) || [];
	if (!context) {
		throw new Error('useTreeList() must be wrapped in <TreeListContextProvider/>');
	}
	return context;
};
