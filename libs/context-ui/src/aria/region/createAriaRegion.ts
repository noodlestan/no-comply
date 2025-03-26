import { shortId } from '../../private';
import type { AriaLabelProps } from '../label';

import type { AriaRegionAPI, AriaRegionOptions, AriaRegionProps } from './types';

export const createAriaRegion = (options: AriaRegionOptions = {}): AriaRegionAPI => {
    const { label, labelledby } = options;

    const resolveLabels = () => {
        const maybeLabel = typeof label === 'function' ? label() : label;
        const maybeLabelledBy = typeof labelledby === 'function' ? labelledby() : labelledby;

        return {
            label: maybeLabel,
            labelledby: !maybeLabelledBy && !maybeLabel ? shortId() : maybeLabelledBy,
        };
    };

    const elProps = (): AriaRegionProps => ({
        role: options.role || 'region',
        'aria-label': resolveLabels().label,
        'aria-labelledby': resolveLabels().labelledby,
    });
    const labelProps = (): AriaLabelProps => ({
        id: resolveLabels().labelledby,
    });

    return {
        elProps,
        labelProps,
    };
};
