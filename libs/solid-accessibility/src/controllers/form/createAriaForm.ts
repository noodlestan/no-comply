import { createComputedProps, mergeProps } from '@no-comply/solid-primitives';

import { createAriaRegion } from '../region';

import type { AriaFormAPI, AriaFormProps } from './types';

export const createAriaForm = (props: AriaFormProps = {}): AriaFormAPI => {
    const { $root: $regionRoot, $label, $description } = createAriaRegion(props);

    const component = () => props.tag ?? 'form';
    const role = () => {
        if (component() !== 'form' || props.role !== 'form') {
            return props.role;
        }
    };
    const $localRoot = createComputedProps({
        component,
        role,
    });

    return {
        $root: mergeProps($regionRoot, $localRoot),
        $label,
        $description,
    };
};
