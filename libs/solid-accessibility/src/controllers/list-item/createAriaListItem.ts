import { createComputedProps, mergeProps } from '@no-comply/solid-primitives';

import { createAriaLabelled } from '../label';

import type { AriaListItemAPI, AriaListItemProps } from './types';

export const createAriaListItem = (props: AriaListItemProps): AriaListItemAPI => {
    const { $root: $regionRoot, $label, $description } = createAriaLabelled(props);

    const component = () => props.tag || 'li';
    const role = () => (component() !== 'li' ? 'listitem' : undefined);
    const $localRoot = createComputedProps({
        component,
        role,
        'aria-selected': () => props.selected,
        'aria-setsize': () => props.setSize,
        'aria-posinset': () => props.posInSet,
    });

    return {
        $root: mergeProps($regionRoot, $localRoot),
        $label,
        $description,
    };
};
