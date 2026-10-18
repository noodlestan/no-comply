import type { ComponentEntityData } from '@no-comply/meta';
import type { Accessor, JSX, Resource } from 'solid-js';

import type { CompilerAPI } from '../../../../TSXCompilerModule';
import type { ComponentProp } from '../types';

export type Props = {
	component: ComponentEntityData;
	showDocs: boolean;
	showGroups: boolean;
	propValues: Resource<Record<string, unknown>>;
	onChangeProp: (name: string, value: unknown) => void;
	compiler?: Accessor<CompilerAPI | undefined>;
	propControls?: (prop: ComponentProp) => JSX.Element;
};
