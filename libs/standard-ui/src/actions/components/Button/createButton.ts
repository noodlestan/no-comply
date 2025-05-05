import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createButtonMixin, createButton as createHeadlessButton } from '@noodlestan/headless-ui';

import styles from './Button.module.css';
import type { ButtonAPI, ButtonProps } from './types';

const defaultProps: PickRequired<ButtonProps, 'variant' | 'size'> = {
    variant: 'primary',
    size: 'normal',
};

export const createButton = (props: ButtonProps): ButtonAPI => {
    const { $root: $buttonRoot } = createHeadlessButton(props);
    const { $root: $buttonMixinRoot } = createButtonMixin();

    const variant = () => props.variant ?? defaultProps.variant;
    const size = () => props.size ?? defaultProps.size;
    const classList = createClassList(styles, () => [
        `Button`,
        `Button-variant-${variant()}`,
        `Button-size-${size()}`,
    ]);
    const $localRoot = createComputedProps({ classList });

    return {
        $root: mergeProps($buttonRoot, $buttonMixinRoot, $localRoot),
    };
};
