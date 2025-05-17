import type { ObjectWithId } from '@noodlestan/context-ui-primitives';
import type { Accessor } from 'solid-js';

import type { OverflowItemsContextOptions } from '../../private';

export type OverflowItemsToggleAPI = {
    renderToggle: OverflowItemsContextOptions<ObjectWithId>['renderToggle'];
    count: Accessor<number>;
};
