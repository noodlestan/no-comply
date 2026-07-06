import type { ComponentEntityData } from '@no-comply/meta';
import { type Component } from 'solid-js';

import {
	APIComponentSection,
	APIDependenciesSection,
	APIEntitySummary,
	APIFactorySection,
	APITypesSection,
} from '../../sections';

type Props = {
	ent: ComponentEntityData;
};

export const APIEntityComponent: Component<Props> = props => {
	return (
		<>
			<APIEntitySummary ent={props.ent} />
			<APIComponentSection ent={props.ent} />
			<APIFactorySection ent={props.ent} />
			<APITypesSection ent={props.ent} />
			<APIDependenciesSection ent={props.ent} />
		</>
	);
};
