import { createFlexMixin as createHeadlessFlexMixin } from '@no-comply/solid-composables';

import { GLOBAL_BP_NAMES } from '../../../theme';

import { type FlexMixinAPI, type FlexMixinProps } from './types';

export const createFlexMixin = (props: FlexMixinProps): FlexMixinAPI => {
    return createHeadlessFlexMixin(props, GLOBAL_BP_NAMES);
};
