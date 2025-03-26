import { resolveAttribute } from '../private';
import { createAriaRegion } from '../region';

import type { AriaTreeAPI, AriaTreeOptions, AriaTreeProps } from './types';

export const createAriaTree = (options: AriaTreeOptions = {}): AriaTreeAPI => {
    const { multiselectable = false, orientation = 'vertical' } = options;

    const region = createAriaRegion({ ...options, role: 'tree' });

    const elProps = (): AriaTreeProps => ({
        ...region.elProps(),
        role: 'tree',
        'aria-orientation': resolveAttribute(orientation),
        'aria-multiselectable': resolveAttribute(multiselectable),
    });

    return {
        elProps,
        labelProps: region.labelProps,
    };
};
