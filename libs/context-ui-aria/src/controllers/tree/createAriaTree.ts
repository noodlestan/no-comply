import { createComputedProps } from '@noodlestan/context-ui-primitives';

import { createAriaRegion } from '../region';

import type { AriaTreeAPI, AriaTreeProps } from './types';

export const createAriaTree = (props: AriaTreeProps = {}): AriaTreeAPI => {
    const { elProps: regionProps, labelProps, descriptionProps } = createAriaRegion(props, 'tree');

    const elProps = createComputedProps(regionProps, {
        'aria-orientation': () => props.orientation ?? 'vertical',
        'aria-multiselectable': () => props.multiselectable ?? false,
    });

    return {
        elProps,
        labelProps,
        descriptionProps,
    };
};
