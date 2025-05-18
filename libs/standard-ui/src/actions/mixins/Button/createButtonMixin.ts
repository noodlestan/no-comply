import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { splitProps } from 'solid-js';

import { createActionMixin } from '../Action';

import styles from './ButtonMixin.module.scss';
import type { ButtonMixinAPI, ButtonMixinProps } from './types';

const defaultProps: PickRequired<ButtonMixinProps, 'size'> = {
    size: 'normal',
};

export const createButtonMixin = (props: ButtonMixinProps): ButtonMixinAPI => {
    const size = () => props.size ?? defaultProps.size;
    const [, others] = splitProps(props, ['size']);
    const actionProps = createComputedProps(others, { size });
    const { $root: $actionMixinRoot } = createActionMixin(actionProps);

    const classList = createClassList(styles, () => [`Button`, `size-${size()}`]);
    const $localRoot = {
        classList,
    };

    return {
        $root: mergeProps($actionMixinRoot, $localRoot),
    };
};
