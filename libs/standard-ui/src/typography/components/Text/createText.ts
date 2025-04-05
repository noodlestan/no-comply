import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-types';
import { createTextMixin } from '@noodlestan/headless-ui';
import { splitProps } from 'solid-js';

import styles from './Text.module.css';
import type { TextAPI, TextProps } from './types';

const defaultProps: PickRequired<TextProps, 'variant' | 'component'> = {
    variant: 'default',
    component: 'p',
};

export const createText = (props: TextProps): TextAPI => {
    const [locals, others] = splitProps(props, ['variant', 'component']);

    const component = () => locals.component ?? defaultProps.component;

    const variant = () => locals.variant ?? defaultProps.variant;
    const classList = createClassList(styles, () => [`Text-variant-${variant()}`]);

    const TextProps = createComputedProps({ classList, component });

    const { elProps: textMixinElProps } = createTextMixin(others);
    return {
        elProps: mergeProps(textMixinElProps, TextProps),
    };
};
