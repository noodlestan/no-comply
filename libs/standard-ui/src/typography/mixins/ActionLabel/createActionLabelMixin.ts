import { createTextMixin as createHeadlessTextMixin } from '@no-comply/solid-composables';
import { createClassList, createComputedProps, mergeProps } from '@no-comply/solid-primitives';

import styles from './ActionLabelMixin.module.scss';
import type { ActionLabelMixinAPI, ActionLabelMixinProps } from './types';

export const createActionLabelMixin = (props: ActionLabelMixinProps): ActionLabelMixinAPI => {
    const { $root: $textMixinRoot } = createHeadlessTextMixin(props);

    const classList = createClassList(styles, () => ['ActionLabel', `size-${props.size}`]);
    const $localRoot = createComputedProps({
        classList,
    });

    return {
        $root: mergeProps($textMixinRoot, $localRoot),
    };
};
