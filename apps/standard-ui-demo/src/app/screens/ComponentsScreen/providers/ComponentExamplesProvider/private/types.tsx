import type { ComponentEntityData } from '@no-comply/meta';
import type { CompilerAPI } from '@purrpose/client-babel';
import type { Accessor, Resource, Setter } from 'solid-js';

import type { ComponentExampleData, ParsedExampleAPI } from '../types';

export type ComponentExamplesContextValue = {
	component: ComponentEntityData;
	compiler: CompilerAPI;
	exampleList: Accessor<ComponentExampleData[]>;
	primaryExample: Resource<ParsedExampleAPI>;
	currentExample: Resource<ParsedExampleAPI>;
	setCurrentExample: Setter<ComponentExampleData | undefined>;
};
