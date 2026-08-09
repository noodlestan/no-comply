import type { TSXView, TSXViewTarget } from '@purrtrait/view-tsx';
import type { Resource, Setter } from 'solid-js';

import type { ComponentExampleData } from '../../ComponentExamplesProvider';

export type ComponentPlaygroundContextValue = {
	exampleList: Resource<ComponentExampleData[]>;
	currentExample: Resource<ComponentExampleData>;
	currentExampleParsed: Resource<TSXView>;
	currentExampleIndex: Resource<number>;
	currentExampleTargets: Resource<{
		[key: string]: TSXViewTarget;
	}>;
	setCurrentExample: Setter<ComponentExampleData | undefined>;
	currentTarget: Resource<TSXViewTarget>;
	currentTargetKey: Resource<string>;
	setCurrentTargetKey: (key: string | undefined) => void;
};
