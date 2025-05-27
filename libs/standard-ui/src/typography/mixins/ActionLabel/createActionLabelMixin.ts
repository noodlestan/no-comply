import {
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createTextMixin as createHeadlessTextMixin } from '@noodlestan/headless-ui';

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
