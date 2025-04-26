import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { AriaLabelledProps } from './types';

export const ARIA_LABELLED_PROPS = definePropKeys<AriaLabelledProps>()([
    'label',
    'labelled',
    'labelledby',
    'described',
    'describedby',
]);
