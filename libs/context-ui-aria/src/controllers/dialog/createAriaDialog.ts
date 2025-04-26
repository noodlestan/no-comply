import { createComputedProps } from '@noodlestan/context-ui-primitives';
import { mergeProps } from 'solid-js';

import { createAriaRegion } from '../region';

import type { AriaDialogAPI, AriaDialogProps } from './types';

export const createAriaDialog = (props: AriaDialogProps = {}): AriaDialogAPI => {
    const { $root: $regionRoot, $label, $description } = createAriaRegion(props, 'dialog');

    const $localRoot = createComputedProps({});

    return {
        $root: mergeProps($regionRoot, $localRoot),
        $label,
        $description,
    };
};
