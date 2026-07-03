// Static imports for build-time JSON inclusion
import { createNoComplyMetaService } from '@no-comply/meta';
import type { NoComplyEntityData, NoComplyMetaOptions } from '@no-comply/meta';
import metaSolidAccessibility from '@no-comply/solid-accessibility/dist/meta.json';
import metaSolidComposables from '@no-comply/solid-composables/dist/meta.json';
import metaSolidContexts from '@no-comply/solid-contexts/dist/meta.json';
import metaSolidPrimitives from '@no-comply/solid-primitives/dist/meta.json';
import metaStandardUI from '@no-comply/standard-ui/dist/meta.json';
import { type ParentComponent } from 'solid-js';

import { routeFor } from '../../app';

import { MetaContext } from './private';
const extracted = [
	...metaSolidAccessibility,
	...metaSolidComposables,
	...metaSolidContexts,
	...metaSolidPrimitives,
	...metaStandardUI,
];

export const MetaProvider: ParentComponent = props => {
	const serviceOptions: NoComplyMetaOptions = {
		makeEntityHref: (entity: NoComplyEntityData, symbol?: string) => {
			if (entity.type === 'component') {
				return symbol ? routeFor.component(entity.name, symbol) : routeFor.entity(entity);
			}
			return symbol ? routeFor.entitySymbol(entity, symbol) : routeFor.entity(entity);
		},
	};

	const meta = createNoComplyMetaService(
		extracted as unknown as NoComplyEntityData[],
		serviceOptions,
	);

	return <MetaContext.Provider value={meta}>{props.children}</MetaContext.Provider>;
};
