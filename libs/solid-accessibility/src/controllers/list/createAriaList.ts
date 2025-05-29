import { createComputedProps, mergeProps } from '@no-comply/solid-primitives';

import { createAriaLabelled } from '../label';

import type { AriaListAPI, AriaListProps } from './types';

export const createAriaList = (props: AriaListProps): AriaListAPI => {
    const { $root: $regionRoot, $label, $description } = createAriaLabelled(props);

    const component = () => props.tag || 'ul';
    const role = () => {
        const c = component();
        return c !== 'ul' && c !== 'ol' ? 'list' : undefined;
    };
    const $localRoot = createComputedProps({
        component,
        role,
        'aria-orientation': () => props.orientation ?? 'vertical',
        'aria-multiselectable': () => props.multiselectable ?? false,
    });

    return {
        $root: mergeProps($regionRoot, $localRoot),
        $label,
        $description,
    };
};
