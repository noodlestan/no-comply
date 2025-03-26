import { resolveAccessorOrValue } from '../../private';
import { createAriaRegion } from '../region';

import type { AriaTreeItemAPI, AriaTreeItemOptions, AriaTreeItemProps } from './types';

export const createAriaTreeItem = (options: AriaTreeItemOptions): AriaTreeItemAPI => {
    const region = createAriaRegion({ ...options, role: 'treeitem' });

    const elProps = (): AriaTreeItemProps => ({
        ...region.elProps(),
        role: 'treeitem',
        'aria-expanded': resolveAccessorOrValue(options.expanded),
        'aria-selected': resolveAccessorOrValue(options.selected),
        'aria-level': resolveAccessorOrValue(options.level),
        'aria-setsize': resolveAccessorOrValue(options.setSize),
        'aria-posinset': resolveAccessorOrValue(options.posInSet),
    });

    return {
        elProps,
        labelProps: region.labelProps,
    };
};
