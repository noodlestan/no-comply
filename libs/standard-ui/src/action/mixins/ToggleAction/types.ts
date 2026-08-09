import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { ActionVariant } from '../../types';

export type ToggleActionMixinProps = {
	value?: boolean | undefined;
	variant?: ActionVariant;
};

export type ToggleActionMixinAPI = {
	$root: {
		classList: ClassList;
	};
	variant: Accessor<ActionVariant>;
};
