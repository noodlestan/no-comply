import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createButtonMixin as createHeadlessButtonMixin } from '@noodlestan/headless-ui';

import styles from './Button.module.css';
import type { ButtonMixinAPI, ButtonMixinProps } from './types';

const defaultProps: PickRequired<ButtonMixinProps, 'variant' | 'size'> = {
    variant: 'secondary',
    size: 'normal',
};

export const createButtonMixin = (props: ButtonMixinProps): ButtonMixinAPI => {
    const { $root: $buttonMixinRoot } = createHeadlessButtonMixin();

    const variant = () => props.variant ?? defaultProps.variant;
    const size = () => props.size ?? defaultProps.size;
    const classList = createClassList(styles, () => [
        `Button`,
        `Button-variant-${variant()}`,
        `Button-size-${size()}`,
    ]);
    const $localRoot = createComputedProps({ classList });

    return {
        $root: mergeProps($buttonMixinRoot, $localRoot),
    };
};
