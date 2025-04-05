import { createComputedProps, resolveValue, shortId } from '@noodlestan/context-ui-types';

import type { AriaRoleName } from '../../types';

import type { AriaRegionAPI, AriaRegionProps } from './types';

export const createAriaRegion = <T extends AriaRoleName = AriaRoleName>(
    props: AriaRegionProps = {},
    staticRole?: T,
): AriaRegionAPI<T> => {
    const resolveLabels = () => {
        const maybeLabel = resolveValue(props.label);
        const maybeLabelledBy = resolveValue(props.labelledby);

        return {
            label: maybeLabel,
            labelledby: !maybeLabelledBy && !maybeLabel ? shortId() : maybeLabelledBy,
        };
    };

    const role = () => (staticRole ?? props.role ?? 'region') as T;

    const elProps = createComputedProps({
        role,
        'aria-label': () => resolveLabels().label,
        'aria-labelledby': () => resolveLabels().labelledby,
    });

    const labelProps = createComputedProps({
        id: () => resolveLabels().labelledby,
    });

    return {
        elProps,
        labelProps,
    };
};
