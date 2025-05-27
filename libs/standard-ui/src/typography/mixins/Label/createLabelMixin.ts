import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createTextMixin as createHeadlessTextMixin } from '@noodlestan/headless-ui';

import styles from './LabelMixin.module.scss';
import type { LabelMixinAPI, LabelMixinProps } from './types';

const defaultProps: PickRequired<LabelMixinProps, 'size'> = {
    size: 'normal',
};

export const createLabelMixin = (props: LabelMixinProps): LabelMixinAPI => {
    const { $root: $textMixinRoot } = createHeadlessTextMixin(props);

    const size = () => props.size ?? defaultProps.size;
    const classList = createClassList(styles, () => ['Label', `size-${size()}`]);
    const $localRoot = createComputedProps({
        classList,
    });

    return {
        $root: mergeProps($textMixinRoot, $localRoot),
    };
};
