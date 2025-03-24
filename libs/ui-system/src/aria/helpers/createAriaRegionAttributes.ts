import type { AriaAttributes, AriaRegionOptions } from '../types';

export const createAriaRegionAttributes = (options: AriaRegionOptions = {}): AriaAttributes => {
    const { label, labelledby } = options;

    if (!label && !labelledby) {
        throw new Error(`Both 'label' and 'labelledby' are empty.`);
    }

    return {
        tabIndex: 0,
        role: 'region',
        'aria-label': label,
        'aria-labelledby': labelledby,
    };
};
