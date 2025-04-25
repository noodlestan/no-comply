import { createComputedProps } from '@noodlestan/context-ui-primitives';

import { createAriaRegion } from '../region';

import type { AriaFormAPI, AriaFormProps } from './types';

export const createAriaForm = (props: AriaFormProps = {}): AriaFormAPI => {
    const { elProps: regionProps, labelProps, descriptionProps } = createAriaRegion(props);

    const component = () => props.component ?? 'form';

    const role = () => {
        if (component() !== 'form' || props.role !== 'form') {
            return props.role;
        }
    };

    const elProps = createComputedProps(regionProps, {
        component,
        role,
    });

    return {
        elProps,
        labelProps,
        descriptionProps,
    };
};
