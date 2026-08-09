import type { NoComplyMetaAPI } from '@no-comply/meta';
import { useContext } from 'solid-js';

import { MetaContext } from './private';

export const useMeta = (): NoComplyMetaAPI => {
	const context = useContext(MetaContext);
	if (!context) {
		throw new Error('useMeta() must be wrapped in <MetaProvider/>');
	}
	return context;
};
