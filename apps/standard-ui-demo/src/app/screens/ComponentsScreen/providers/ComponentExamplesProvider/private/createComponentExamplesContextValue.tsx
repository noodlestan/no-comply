import type { ComponentEntityData } from '@no-comply/meta';
import { createChainedResource } from '@no-comply/solid-primitives';
import { type Accessor, createResource } from 'solid-js';

import { fetchComponentDocsData } from './fetchComponentDocsData';
import type { ComponentExamplesContextValue } from './types';
//      - overrides (is overriden)

export const createComponentExamplesContextValue = (
	componentData: Accessor<ComponentEntityData>,
): ComponentExamplesContextValue => {
	const [componentsDocsData] = createResource(() => componentData().name, fetchComponentDocsData);
	const [exampleList] = createChainedResource(componentsDocsData, data => data.examples);

	return {
		component: componentData,
		exampleList,
	};
};
