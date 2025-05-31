import { type PickRequired, computedProps, mergeProps } from '@no-comply/solid-primitives';

import { createLabelMixin } from '../../mixins';

import type { LabelAPI, LabelProps } from './types';

const defaultProps: PickRequired<LabelProps, 'tag'> = {
    tag: 'label',
};

export const createLabel = (props: LabelProps): LabelAPI => {
    const { $root: $textMixinRoot } = createLabelMixin(props);

    const component = () => props.tag ?? defaultProps.tag;
    const $root = computedProps({
        component,
    });

    return {
        $root: mergeProps($textMixinRoot, $root),
    };
};
