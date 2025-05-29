import { type PickRequired, createComputedProps, mergeProps } from '@no-comply/solid-primitives';

import { createLabelMixin } from '../../mixins';

import type { LabelAPI, LabelProps } from './types';

const defaultProps: PickRequired<LabelProps, 'tag'> = {
    tag: 'label',
};

export const createLabel = (props: LabelProps): LabelAPI => {
    const { $root: $textMixinRoot } = createLabelMixin(props);

    const component = () => props.tag ?? defaultProps.tag;
    const $localRoot = createComputedProps({
        component,
    });

    return {
        $root: mergeProps($textMixinRoot, $localRoot),
    };
};
