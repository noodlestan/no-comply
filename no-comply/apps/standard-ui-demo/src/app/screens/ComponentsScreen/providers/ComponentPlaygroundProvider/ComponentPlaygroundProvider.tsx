import { type ParentComponent, type Resource } from 'solid-js';

import type { ComponentExampleData } from '../ComponentExamplesProvider';

import { ComponentPlaygroundContext, createComponentPlaygroundContextValue } from './private';

type ComponentPlaygroundProviderProps = {
	examples: Resource<ComponentExampleData[]>;
};

export const ComponentPlaygroundProvider: ParentComponent<
	ComponentPlaygroundProviderProps
> = props => {
	const value = () => createComponentPlaygroundContextValue(props.examples);

	return (
		// eslint-disable-next-line solid/reactivity
		<ComponentPlaygroundContext.Provider value={value()}>
			{props.children}
		</ComponentPlaygroundContext.Provider>
	);
};
