import { createComputedProps } from '@noodlestan/context-ui-types';

import { createAriaRegion } from '../region';

import type { AriaDialogAPI, AriaDialogProps } from './types';

export const createAriaDialog = (props: AriaDialogProps = {}): AriaDialogAPI => {
    const { elProps: regionProps, labelProps } = createAriaRegion(props, 'dialog');

    const elProps = createComputedProps(regionProps, {});

    return {
        elProps,
        labelProps,
    };
};
