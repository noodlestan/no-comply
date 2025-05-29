import { createComputedProps } from '@no-comply/solid-primitives';

import type { FieldLabelAPI, FieldLabelProps } from './types';

export const createFieldLabel = (props: FieldLabelProps): FieldLabelAPI => {
    const $localRoot = createComputedProps({
        for: () => props.for,
    });

    return {
        $root: $localRoot,
    };
};
