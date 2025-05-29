import { createFlexMixin as createHeadlessFlexMixin } from '@no-comply/solid-composables';
import type { PickProps } from '@no-comply/solid-primitives';

import { GLOBAL_BP_NAMES } from '../../../theme';

import { type FlexMixinAPI, type FlexMixinProps } from './types';

const DEFAULTS: PickProps<FlexMixinProps, 'gap'> = {
    gap: 'none',
};

export const createFlexMixin = (props: FlexMixinProps): FlexMixinAPI => {
    return createHeadlessFlexMixin(props, DEFAULTS, GLOBAL_BP_NAMES);
};
