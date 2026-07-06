import type { ComponentEntityData } from '@no-comply/meta';
import { type ParentComponent } from 'solid-js';

import { ComponentExamplesContext, createComponentExamplesContextValue } from './private';

type ComponentExamplesProviderProps = {
	component: ComponentEntityData;
};

export const ComponentExamplesProvider: ParentComponent<ComponentExamplesProviderProps> = props => {
	const value = () => createComponentExamplesContextValue(() => props.component);

	return (
		// eslint-disable-next-line solid/reactivity
		<ComponentExamplesContext.Provider value={value()}>
			{props.children}
		</ComponentExamplesContext.Provider>
	);
};
