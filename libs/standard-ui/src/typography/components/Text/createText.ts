import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createTextMixin } from '@noodlestan/headless-ui';

import styles from './Text.module.css';
import type { TextAPI, TextProps } from './types';

const defaultProps: PickRequired<TextProps, 'tag' | 'variant'> = {
    tag: 'p',
    variant: 'normal',
};

export const createText = (props: TextProps): TextAPI => {
    const { $root: $textMixinRoot } = createTextMixin(props);

    const component = () => props.tag ?? defaultProps.tag;
    const variant = () => props.variant ?? defaultProps.variant;
    const classList = createClassList(styles, () => ['Text', `Text-variant-${variant()}`]);
    const $localRoot = createComputedProps({
        classList,
        component,
    });

    return {
        $root: mergeProps($textMixinRoot, $localRoot),
    };
};
