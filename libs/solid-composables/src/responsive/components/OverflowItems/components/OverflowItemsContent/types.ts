import type { ObjectWithId } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { OverflowItemsContextOptions } from '../../private';

export type OverflowItemsContentAPI = {
    renderItem: OverflowItemsContextOptions<ObjectWithId>['renderItem'];
    items: Accessor<ObjectWithId[]>;
    isCurrent: (id: string) => boolean;
};
