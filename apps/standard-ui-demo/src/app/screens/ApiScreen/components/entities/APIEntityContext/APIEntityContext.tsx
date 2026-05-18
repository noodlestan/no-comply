import type { ContextEntityData } from '@no-comply/meta-entities';
import { type Component } from 'solid-js';

import { APIDependenciesSection, APIFactoriesSection, APITypesSection } from '../../sections';

type Props = {
	ent: ContextEntityData;
};

export const APIEntityContext: Component<Props> = props => {
	return (
		<>
			<APIFactoriesSection ent={props.ent} />
			<APITypesSection ent={props.ent} />
			<APIDependenciesSection ent={props.ent} />
		</>
	);
};
