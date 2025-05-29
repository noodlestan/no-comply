import {
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';

import { createActionLabelMixin } from '../../../typography';
import { createActionMixin } from '../Action';
import { createSizedActionMixin } from '../SizedAction';

import styles from './ButtonMixin.module.scss';
import type { ButtonMixinAPI, ButtonMixinProps } from './types';

export const createButtonMixin = (props: ButtonMixinProps): ButtonMixinAPI => {
    const { $root: $actionMixinRoot } = createActionMixin(props);
    const { $root: $sizedActionMixinRoot, size } = createSizedActionMixin(props);

    const actionLabelProps = createComputedProps({ size, nowrap: () => true });
    const { $root: $actionLabelMixinRoot } = createActionLabelMixin(actionLabelProps);

    const classList = createClassList(styles, () => [`Button`, `size-${size()}`]);
    const $localRoot = {
        classList,
    };

    return {
        $root: mergeProps(
            $actionMixinRoot,
            $sizedActionMixinRoot,
            $actionLabelMixinRoot,
            $localRoot,
        ),
        size,
    };
};
