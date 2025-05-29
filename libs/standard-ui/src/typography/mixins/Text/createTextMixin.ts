import { createTextMixin as createHeadlessTextMixin } from '@no-comply/solid-composables';
import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@no-comply/solid-primitives';

import styles from './TextMixin.module.scss';
import type { TextMixinAPI, TextMixinProps } from './types';

const defaultProps: PickRequired<TextMixinProps, 'variant'> = {
    variant: 'normal',
};

export const createTextMixin = (props: TextMixinProps): TextMixinAPI => {
    const { $root: $textMixinRoot } = createHeadlessTextMixin(props);

    const variant = () => props.variant ?? defaultProps.variant;
    const classList = createClassList(styles, () => ['Text', `Text-variant-${variant()}`]);
    const $localRoot = createComputedProps({
        classList,
    });

    return {
        $root: mergeProps($textMixinRoot, $localRoot),
    };
};
