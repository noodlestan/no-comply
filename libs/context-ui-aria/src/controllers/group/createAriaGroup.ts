import { createComputedProps } from '@noodlestan/context-ui-primitives';

import { createAriaRegion } from '../region';

import type { AriaGroupAPI, AriaGroupProps } from './types';

export const createAriaGroup = (props: AriaGroupProps = {}): AriaGroupAPI => {
    const { elProps: regionProps, labelProps, descriptionProps } = createAriaRegion(props, 'group');

    const elProps = createComputedProps(regionProps, {
        'aria-expanded': () => props.expanded,
        'aria-setsize': () => props.setSize,
    });

    return {
        elProps,
        labelProps,
        descriptionProps,
    };
};
