import { createComputedProps } from '@noodlestan/context-ui-types';

import { createAriaRegion } from '../region';

import type { AriaGroupAPI, AriaGroupProps } from './types';

export const createAriaGroup = (props: AriaGroupProps = {}): AriaGroupAPI => {
    const { elProps: regionProps, labelProps } = createAriaRegion(props, 'group');

    const elProps = createComputedProps(regionProps, {
        'aria-expanded': () => props.expanded,
        'aria-setsize': () => props.setSize,
    });

    return {
        elProps,
        labelProps,
    };
};
