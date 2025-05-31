import { computedProps, mergeProps } from '@no-comply/solid-primitives';

import { createAriaRegion } from '../region';

import type { AriaGroupAPI, AriaGroupProps } from './types';

export const createAriaGroup = (props: AriaGroupProps = {}): AriaGroupAPI => {
    const { $root: $regionRoot, $label, $description, hasLabel } = createAriaRegion(props, 'group');

    const $root = computedProps({
        role: () => (hasLabel() ? 'group' : undefined),
        'aria-expanded': () => props.expanded,
        'aria-setsize': () => props.setSize,
    });

    return {
        $root: mergeProps($regionRoot, $root),
        $label,
        $description,
        hasLabel,
    };
};
