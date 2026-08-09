import type { ComponentEntityData } from '@no-comply/meta';
import type { JSX, Resource } from 'solid-js';

import type { ComponentProp } from '../types';

export type Props = {
	component: ComponentEntityData;
	showDocs: boolean;
	showGroups: boolean;
	propValues: Resource<Record<string, unknown>>;
	onChangeProp: (name: string, value: unknown) => void;
	propControls?: (prop: ComponentProp) => JSX.Element;
};
