import { useContext } from 'solid-js';

import { ComponentPlaygroundContext, type ComponentPlaygroundContextValue } from './private';

export const useComponentPlayground = (): ComponentPlaygroundContextValue => {
	const context = useContext(ComponentPlaygroundContext);
	if (!context) {
		throw new Error('useComponentPlayground() must be wrapped in <ComponentPlaygroundProvider/>');
	}
	return context;
};
