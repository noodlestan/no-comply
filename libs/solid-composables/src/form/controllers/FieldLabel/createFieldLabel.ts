import { computedProps } from '@no-comply/solid-primitives';

import type { FieldLabelAPI, FieldLabelProps } from './types';

export const createFieldLabel = (props: FieldLabelProps): FieldLabelAPI => {
    const $root = computedProps({
        for: () => props.for,
    });

    return {
        $root,
    };
};
