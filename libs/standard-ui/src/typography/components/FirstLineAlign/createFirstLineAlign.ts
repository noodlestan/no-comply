import {
    type PickRequired,
    combineProps,
    computedProps,
    pickProps,
} from '@no-comply/solid-primitives';

import {
    COMPOSABLE_TYPE_MIXIN_PROPS,
    type ComposableTypeMixinProps,
    createComposableTypeMixin,
    createFirstLineAlignMixin,
} from '../../mixins';

import type { FirstLineAlignAPI, FirstLineAlignAllProps, FirstLineAlignProps } from './types';

const defaultProps: PickRequired<FirstLineAlignProps, 'tag'> = {
    tag: 'div',
};

export const createFirstLineAlign = (props: FirstLineAlignProps): FirstLineAlignAPI => {
    const { $root: $firstLineAlignRoot } = createFirstLineAlignMixin(props);
    const { $root: $composableTypeRoot } = createComposableTypeMixin(props);

    const component = () => props.tag ?? defaultProps.tag;
    const $root = computedProps({
        component,
    });

    const composableTypeProps = pickProps(
        props as FirstLineAlignAllProps,
        COMPOSABLE_TYPE_MIXIN_PROPS,
    ) as ComposableTypeMixinProps;

    return {
        $root: combineProps($firstLineAlignRoot, $composableTypeRoot, $root),
        composableTypeProps,
    };
};
