import type { ControllerEntityData } from '@no-comply/meta-entities';
import { type Component } from 'solid-js';

import { APIDependenciesSection, APIFactoriesSection, APITypesSection } from '../../sections';

type Props = {
	ent: ControllerEntityData;
};

export const APIEntityController: Component<Props> = props => {
	return (
		<>
			<APIFactoriesSection ent={props.ent} />
			<APITypesSection ent={props.ent} />
			<APIDependenciesSection ent={props.ent} />
		</>
	);
};
