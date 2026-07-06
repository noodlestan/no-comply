import type { ProviderEntityData } from '@no-comply/meta';
import { type Component } from 'solid-js';

import { APIDependenciesSection, APITypesSection } from '../../sections';

type Props = {
	ent: ProviderEntityData;
};

export const APIEntityProvider: Component<Props> = props => {
	return (
		<>
			<APITypesSection ent={props.ent} />
			<APIDependenciesSection ent={props.ent} />
		</>
	);
};
