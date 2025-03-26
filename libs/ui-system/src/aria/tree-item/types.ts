import type { Accessor } from 'solid-js';

import type { AriaLabelProps } from '../label';
import type { AriaRegionOptions, AriaRegionProps } from '../region';
import type { AriaAttributes } from '../types';

export type AriaTreeItemOptions = Pick<AriaRegionOptions, 'label' | 'labelledby'> & {
    selected: Accessor<boolean>;
    expanded: Accessor<boolean>;
    level: Accessor<number>;
    setSize: Accessor<number>;
    posInSet: Accessor<number>;
};

export type AriaTreeItemProps = AriaRegionProps &
    Pick<
        AriaAttributes,
        'aria-expanded' | 'aria-selected' | 'aria-level' | 'aria-setsize' | 'aria-posinset'
    > & {
        role: 'treeitem';
    };

export interface AriaTreeItemAPI {
    elProps: Accessor<AriaTreeItemProps>;
    labelProps: Accessor<AriaLabelProps>;
}
