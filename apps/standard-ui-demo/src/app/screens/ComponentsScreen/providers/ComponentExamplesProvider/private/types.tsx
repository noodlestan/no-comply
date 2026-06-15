import type { ComponentEntityData } from '@no-comply/meta';
import type { CompilerAPI } from '@purrpose/client-babel';
import type { Resource, Setter } from 'solid-js';

import type { ExampleData, ParsedExampleAPI } from '../types';

export type ComponentExamplesContextValue = {
	component: ComponentEntityData;
	compiler: CompilerAPI;
	exampleList: Resource<ExampleData[]>;
	primaryExample: Resource<ParsedExampleAPI>;
	currentExample: Resource<ParsedExampleAPI>;
	setCurrentExample: Setter<ExampleData | undefined>;
};
