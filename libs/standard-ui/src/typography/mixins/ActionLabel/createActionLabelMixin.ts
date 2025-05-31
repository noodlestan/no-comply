import { createTextMixin as createHeadlessTextMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
    type PickRequired,
    combineProps,
    computedProps,
    createClassList,
} from '@no-comply/solid-primitives';

import styles from './ActionLabelMixin.module.scss';
import { $ACTION_LABEL_MIXIN } from './constants';
import type { ActionLabelMixinAPI, ActionLabelMixinProps } from './types';

const defaultProps: PickRequired<ActionLabelMixinProps, 'variant'> = {
    variant: 'normal',
};

export const createActionLabelMixin = (props: ActionLabelMixinProps): ActionLabelMixinAPI => {
    const [locals, expose, compose] = createExposable($ACTION_LABEL_MIXIN, props);

    const { $root: $textMixinRoot } = compose(createHeadlessTextMixin(locals));

    const variant = () => locals.variant ?? defaultProps.variant;
    const classList = createClassList(styles, () => ['ActionLabel', `variant-${variant()}`]);

    const $root = computedProps({
        classList,
    });

    return exposeAPI(expose, '$root', {
        $root: combineProps($textMixinRoot, $root),
    });
};
