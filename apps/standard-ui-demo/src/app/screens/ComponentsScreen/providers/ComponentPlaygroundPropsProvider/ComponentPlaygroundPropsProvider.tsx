import type { ComponentEntityData } from '@no-comply/meta';
import { type ParentComponent } from 'solid-js';

import {
	ComponentPlaygroundPropsContext,
	createComponentPlaygroundPropsContextValue,
} from './private';

type ComponentPlaygroundPropsProviderProps = {
	component: ComponentEntityData;
};

export const ComponentPlaygroundPropsProvider: ParentComponent<
	ComponentPlaygroundPropsProviderProps
> = props => {
	const value = () => createComponentPlaygroundPropsContextValue(() => props.component);

	return (
		// eslint-disable-next-line solid/reactivity
		<ComponentPlaygroundPropsContext.Provider value={value()}>
			{props.children}
		</ComponentPlaygroundPropsContext.Provider>
	);
};
