import type { PickProps } from '@noodlestan/context-ui-primitives';
import { createFlexMixin as createHeadlessFlexMixin } from '@noodlestan/headless-ui';

import { GLOBAL_BP_NAMES } from '../../../theme';

import { type FlexMixinAPI, type FlexMixinProps } from './types';

const DEFAULTS: PickProps<FlexMixinProps, 'gap'> = {
    gap: 'none',
};

export const createFlexMixin = (props: FlexMixinProps): FlexMixinAPI => {
    return createHeadlessFlexMixin(props, DEFAULTS, GLOBAL_BP_NAMES);
};
