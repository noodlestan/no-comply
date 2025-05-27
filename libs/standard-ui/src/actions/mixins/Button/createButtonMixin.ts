import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';

import { createActionLabelMixin } from '../../../typography';
import { createActionMixin } from '../Action';
import { createSizedActionMixin } from '../SizedAction';

import styles from './ButtonMixin.module.scss';
import type { ButtonMixinAPI, ButtonMixinProps } from './types';

const defaultProps: PickRequired<ButtonMixinProps, 'size'> = {
    size: 'normal',
};

export const createButtonMixin = (props: ButtonMixinProps): ButtonMixinAPI => {
    const { $root: $actionMixinRoot } = createActionMixin(props);

    const size = () => props.size ?? defaultProps.size;
    const aligned = () => props.aligned;
    const sizedProps = createComputedProps({ size, aligned });
    const { $root: $sizedActionMixinRoot } = createSizedActionMixin(sizedProps);

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
    };
};
