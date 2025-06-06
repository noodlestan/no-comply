import type { ObjectWithId } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { OverflowItemsContextOptions } from '../../private';

export type OverflowItemsToggleAPI = {
	renderToggle: OverflowItemsContextOptions<ObjectWithId>['renderToggle'];
	count: Accessor<number>;
};
