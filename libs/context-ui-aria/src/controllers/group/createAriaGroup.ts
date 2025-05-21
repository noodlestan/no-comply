import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';

import { createAriaRegion } from '../region';

import type { AriaGroupAPI, AriaGroupProps } from './types';

export const createAriaGroup = (props: AriaGroupProps = {}): AriaGroupAPI => {
    const { $root: $regionRoot, $label, $description } = createAriaRegion(props, 'group');

    const $localRoot = createComputedProps({
        'aria-expanded': () => props.expanded,
        'aria-setsize': () => props.setSize,
    });

    return {
        $root: mergeProps($regionRoot, $localRoot),
        $label,
        $description,
    };
};
