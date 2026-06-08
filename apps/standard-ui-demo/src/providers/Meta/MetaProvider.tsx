// Static imports for build-time JSON inclusion
import { createNoComplyMetaService } from '@no-comply/meta';
import type { NoComplyEntityData } from '@no-comply/meta';
import metaSolidAccessibility from '@no-comply/solid-accessibility/dist/meta.json';
import metaSolidComposables from '@no-comply/solid-composables/dist/meta.json';
import metaSolidContexts from '@no-comply/solid-contexts/dist/meta.json';
import metaSolidPrimitives from '@no-comply/solid-primitives/dist/meta.json';
import metaStandardUI from '@no-comply/standard-ui/dist/meta.json';
import { type ParentComponent } from 'solid-js';

import { MetaContext } from './private';
const extracted = [
	...metaSolidAccessibility,
	...metaSolidComposables,
	...metaSolidContexts,
	...metaSolidPrimitives,
	...metaStandardUI,
];

export const MetaProvider: ParentComponent = props => {
	const meta = createNoComplyMetaService(extracted as unknown as NoComplyEntityData[]);

	return <MetaContext.Provider value={meta}>{props.children}</MetaContext.Provider>;
};
