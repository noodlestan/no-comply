import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { FIELD_LABEL_PROPS as HEADLESS_FIELD_LABEL_PROPS } from '@noodlestan/headless-ui';

import type { FieldLabelProps } from './types';

export const FIELD_LABEL_PROPS = definePropKeys<FieldLabelProps>()([
    ...HEADLESS_FIELD_LABEL_PROPS,
    'size',
]);
