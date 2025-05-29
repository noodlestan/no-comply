import type { PickProps } from '@noodlestan/context-ui-primitives';
import { createLayoutMixin as createHeadlessLayoutMixin } from '@noodlestan/headless-ui';

import { GLOBAL_BP_NAMES } from '../../../theme';

import { type LayoutMixinAPI, type LayoutMixinProps } from './types';

const DEFAULTS: PickProps<LayoutMixinProps, 'padding'> = {
    padding: 'none',
};

export const createLayoutMixin = (props: LayoutMixinProps): LayoutMixinAPI => {
    return createHeadlessLayoutMixin(props, DEFAULTS, GLOBAL_BP_NAMES);
};
