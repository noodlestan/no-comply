import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createAriaRegion } from '../region';

import type { AriaTreeAPI, AriaTreeProps } from './types';

export const createAriaTree = (props: AriaTreeProps = {}): AriaTreeAPI => {
    const { $root: $regionRoot, $label, $description } = createAriaRegion(props, 'tree');

    const $root = computedProps({
        'aria-orientation': () => props.orientation ?? 'vertical',
        'aria-multiselectable': () => props.multiselectable ?? false,
    });

    return {
        $root: combineProps($regionRoot, $root),
        $label,
        $description,
    };
};
