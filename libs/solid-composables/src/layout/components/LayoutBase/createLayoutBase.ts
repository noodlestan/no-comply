import { type PickRequired, combineProps, computedProps } from '@no-comply/solid-primitives';

import { createLayoutMixin } from '../../mixins';

import { type LayoutBaseAPI, type LayoutBaseProps } from './types';

const defaultProps: PickRequired<LayoutBaseProps, 'tag'> = {
    tag: 'div',
};

export const createLayoutBase = (props: LayoutBaseProps): LayoutBaseAPI => {
    const { $root: $layoutMixinRoot } = createLayoutMixin(props);

    const component = () => props.tag ?? defaultProps.tag;
    const $root = computedProps({
        component,
    });

    return {
        $root: combineProps($layoutMixinRoot, $root),
    };
};
