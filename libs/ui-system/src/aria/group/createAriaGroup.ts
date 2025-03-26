import { resolveAttribute } from '../private';
import { createAriaRegion } from '../region';

import type { AriaGroupAPI, AriaGroupOptions, AriaGroupProps } from './types';

export const createAriaGroup = (options: AriaGroupOptions = {}): AriaGroupAPI => {
    const { expanded = false, setSize } = options;

    const region = createAriaRegion({ ...options });

    const elProps = (): AriaGroupProps => ({
        ...region.elProps(),
        role: 'group',
        'aria-expanded': resolveAttribute(expanded),
        'aria-setsize': resolveAttribute(setSize),
    });

    return {
        elProps,
        labelProps: region.labelProps,
    };
};
