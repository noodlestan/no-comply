import { createComputedProps, mergeProps } from '@no-comply/solid-primitives';

import { createAriaRegion } from '../region';

import type { AriaTreeAPI, AriaTreeProps } from './types';

export const createAriaTree = (props: AriaTreeProps = {}): AriaTreeAPI => {
    const { $root: $regionRoot, $label, $description } = createAriaRegion(props, 'tree');

    const $localRoot = createComputedProps({
        'aria-orientation': () => props.orientation ?? 'vertical',
        'aria-multiselectable': () => props.multiselectable ?? false,
    });

    return {
        $root: mergeProps($regionRoot, $localRoot),
        $label,
        $description,
    };
};
