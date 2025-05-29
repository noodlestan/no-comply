import { type PickRequired, createComputedProps, mergeProps } from '@no-comply/solid-primitives';

import { createLayoutMixin } from '../../mixins';

import { type LayoutBaseAPI, type LayoutBaseProps } from './types';

const defaultProps: PickRequired<LayoutBaseProps, 'tag'> = {
    tag: 'div',
};

export const createLayoutBase = (props: LayoutBaseProps): LayoutBaseAPI => {
    const { $root: $layoutMixinRoot } = createLayoutMixin(props);

    const component = () => props.tag ?? defaultProps.tag;
    const $localRoot = createComputedProps({
        component,
    });

    return {
        $root: mergeProps($layoutMixinRoot, $localRoot),
    };
};
