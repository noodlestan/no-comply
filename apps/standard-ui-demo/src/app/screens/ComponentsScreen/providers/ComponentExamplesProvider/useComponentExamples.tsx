import { useContext } from 'solid-js';

import { ComponentExamplesContext, type ComponentExamplesContextValue } from './private';

export const useComponentExamples = (): ComponentExamplesContextValue => {
	const context = useContext(ComponentExamplesContext);
	if (!context) {
		throw new Error('useComponentExamples() must be wrapped in <ComponentExamplesProvider/>');
	}
	return context;
};
