import { createComputedProps } from '@noodlestan/context-ui-primitives';

import type { FieldLabelAPI, FieldLabelProps } from './types';

export const createFieldLabel = (props: FieldLabelProps): FieldLabelAPI => {
    const $localRoot = createComputedProps({
        for: () => props.for,
    });

    return {
        $root: $localRoot,
    };
};
