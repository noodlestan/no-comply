import { createComputedProps } from '@noodlestan/context-ui-primitives';

import { createAriaRegion } from '../region';

import type { AriaDialogAPI, AriaDialogProps } from './types';

export const createAriaDialog = (props: AriaDialogProps = {}): AriaDialogAPI => {
    const {
        elProps: regionProps,
        labelProps,
        descriptionProps,
    } = createAriaRegion(props, 'dialog');

    const elProps = createComputedProps(regionProps, {});

    return {
        elProps,
        labelProps,
        descriptionProps,
    };
};
