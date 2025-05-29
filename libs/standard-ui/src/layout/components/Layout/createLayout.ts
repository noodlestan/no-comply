import { type PickRequired, createComputedProps, mergeProps } from '@no-comply/solid-primitives';

import { createLayoutMixin } from '../../mixins';

import { type LayoutAPI, type LayoutProps } from './types';

const defaultProps: PickRequired<LayoutProps, 'tag'> = {
    tag: 'div',
};

export const createLayout = (props: LayoutProps): LayoutAPI => {
    const { $root: $layoutMixinRoot } = createLayoutMixin(props);

    const component = () => props.tag ?? defaultProps.tag;
    const $localRoot = createComputedProps({
        component,
    });

    return {
        $root: mergeProps($layoutMixinRoot, $localRoot),
    };
};
