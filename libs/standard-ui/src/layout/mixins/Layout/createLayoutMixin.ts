import { createLayoutMixin as createHeadlessLayoutMixin } from '@no-comply/solid-composables';

import { GLOBAL_BP_NAMES } from '../../../theme';

import { type LayoutMixinAPI, type LayoutMixinProps } from './types';

export const createLayoutMixin = (props: LayoutMixinProps): LayoutMixinAPI => {
    return createHeadlessLayoutMixin(props, GLOBAL_BP_NAMES);
};
