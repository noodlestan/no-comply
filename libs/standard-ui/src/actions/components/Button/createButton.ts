import { createClassList, createComputedProps, mergeProps } from '@noodlestan/context-ui-types';
import { createButtonMixin, createPressable } from '@noodlestan/headless-ui';
import { splitProps } from 'solid-js';

import styles from './Button.module.css';
import type { ButtonAPI, ButtonProps } from './types';

const defaultProps = {
    variant: 'primary',
    size: 's',
    length: 'auto',
};

export const createButton = (props: ButtonProps): ButtonAPI => {
    const [locals, others] = splitProps(props, ['variant', 'size']);

    const variant = () => locals.variant ?? defaultProps.variant;
    const size = () => locals.size ?? defaultProps.size;

    const classList = createClassList(styles, () => [
        `Button-variant-${variant()}`,
        `Button-size-${size()}`,
    ]);

    const buttonProps = createComputedProps({ classList });

    const { elProps: pressableElProps } = createPressable(others);
    const { elProps: buttonMixinElProps } = createButtonMixin(others);
    return {
        elProps: mergeProps(others, pressableElProps, buttonMixinElProps, buttonProps),
    };
};
