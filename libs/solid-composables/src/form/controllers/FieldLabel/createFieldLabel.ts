import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps } from '@no-comply/solid-primitives';

import { $FIELD_LABEL } from './constants';
import type { FieldLabelAPI, FieldLabelProps } from './types';

export const createFieldLabel = (props: FieldLabelProps): FieldLabelAPI => {
    const [locals, expose] = createExposable($FIELD_LABEL, props);

    const $root = computedProps({
        for: () => locals.for,
    });

    return exposeAPI(expose, '$root', {
        $root,
    });
};
