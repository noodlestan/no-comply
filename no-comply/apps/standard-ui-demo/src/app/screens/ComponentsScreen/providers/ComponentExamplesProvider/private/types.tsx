import type { ComponentEntityData } from '@no-comply/meta';
import type { Accessor, Resource } from 'solid-js';

import type { ComponentExampleData } from '../types';

export type ComponentExamplesContextValue = {
	component: Accessor<ComponentEntityData>;
	exampleList: Resource<ComponentExampleData[]>;
};
