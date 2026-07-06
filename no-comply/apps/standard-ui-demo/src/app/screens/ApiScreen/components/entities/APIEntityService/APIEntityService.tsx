import type { ServiceEntityData } from '@no-comply/meta';
import { type Component } from 'solid-js';

import { APIDependenciesSection, APIFactoriesSection, APITypesSection } from '../../sections';

type Props = {
	ent: ServiceEntityData;
};

export const APIEntityService: Component<Props> = props => {
	return (
		<>
			<APIFactoriesSection ent={props.ent} />
			<APITypesSection ent={props.ent} />
			<APIDependenciesSection ent={props.ent} />
		</>
	);
};
