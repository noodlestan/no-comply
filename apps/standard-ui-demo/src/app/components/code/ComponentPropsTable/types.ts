import type { ComponentEntityData } from '@no-comply/meta-entities';

import type { ComponentPropProp } from '../ComponentPropsRow';

export interface ComponentPropsTableProps {
	component: ComponentEntityData;
	props: ComponentPropProp[];
}
