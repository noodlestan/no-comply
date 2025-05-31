import { createLayoutMixin as createHeadlessLayoutMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';

import { GLOBAL_BP_NAMES } from '../../../theme';

import { $LAYOUT_MIXIN } from './constants';
import { type LayoutMixinAPI, type LayoutMixinProps } from './types';

export const createLayoutMixin = (props: LayoutMixinProps): LayoutMixinAPI => {
    const [locals, expose, compose] = createExposable($LAYOUT_MIXIN, props);

    const { $root: $layoutMixinRoot } = compose(createHeadlessLayoutMixin(locals, GLOBAL_BP_NAMES));

    return exposeAPI(expose, '$root', {
        $root: $layoutMixinRoot,
    });
};
