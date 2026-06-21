import { useContext } from 'solid-js';

import {
	ComponentPlaygroundPropsContext,
	type ComponentPlaygroundPropsContextValue,
} from './private';

export const useComponentPlaygroundProps = (): ComponentPlaygroundPropsContextValue => {
	const context = useContext(ComponentPlaygroundPropsContext);
	if (!context) {
		throw new Error(
			'useComponentPlaygroundProps() must be wrapped in <ComponentPlaygroundPropsProvider/>',
		);
	}
	return context;
};
