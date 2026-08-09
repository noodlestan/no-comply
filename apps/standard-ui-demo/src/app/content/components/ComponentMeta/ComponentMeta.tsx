import type { ComponentEntityData } from '@no-comply/meta';
import { type Component } from 'solid-js';

import { ImportStatement } from '../ImportStatement';

type Props = {
	component: ComponentEntityData;
};

export const ComponentMeta: Component<Props> = props => {
	return (
		<div>
			<ImportStatement name={props.component.name} package={props.component.package} />
		</div>
	);
};
