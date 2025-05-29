import { createLayoutMixin as createHeadlessLayoutMixin } from '@no-comply/solid-composables';
import type { PickProps } from '@no-comply/solid-primitives';

import { GLOBAL_BP_NAMES } from '../../../theme';

import { type LayoutMixinAPI, type LayoutMixinProps } from './types';

const DEFAULTS: PickProps<LayoutMixinProps, 'padding'> = {
    padding: 'none',
};

export const createLayoutMixin = (props: LayoutMixinProps): LayoutMixinAPI => {
    return createHeadlessLayoutMixin(props, DEFAULTS, GLOBAL_BP_NAMES);
};
