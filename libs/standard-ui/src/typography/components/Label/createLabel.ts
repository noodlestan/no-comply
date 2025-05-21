import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createTextMixin } from '@noodlestan/headless-ui';

import styles from './Label.module.css';
import type { LabelAPI, LabelProps } from './types';

const defaultProps: PickRequired<LabelProps, 'tag' | 'variant'> = {
    tag: 'label',
    variant: 'normal',
};

export const createLabel = (props: LabelProps): LabelAPI => {
    const { $root: $textMixinRoot } = createTextMixin(props);

    const component = () => props.tag ?? defaultProps.tag;
    const variant = () => props.variant ?? defaultProps.variant;
    const classList = createClassList(styles, () => ['Label', `Label-variant-${variant()}`]);
    const $localRoot = createComputedProps({
        classList,
        component,
    });

    return {
        $root: mergeProps($textMixinRoot, $localRoot),
    };
};
