import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { AriaLabelledProps } from './types';

export const ARIA_LABELLED_PROPS = definePropKeys<AriaLabelledProps>()([
    'label',
    'labelled',
    'aria-labelledby',
    'described',
    'aria-describedby',
]);
