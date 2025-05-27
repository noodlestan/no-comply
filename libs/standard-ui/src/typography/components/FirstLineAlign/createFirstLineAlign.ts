import {
    type PickRequired,
    createComputedProps,
    mergeProps,
    pickProps,
} from '@noodlestan/context-ui-primitives';

import {
    COMPOSABLE_TYPE_MIXIN_PROPS,
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
    const $localRoot = createComputedProps({
        component,
    });

    const composableTypeProps = pickProps(
        props as FirstLineAlignAllProps,
        COMPOSABLE_TYPE_MIXIN_PROPS,
    );

    return {
        $root: mergeProps($firstLineAlignRoot, $composableTypeRoot, $localRoot),
        composableTypeProps,
    };
};
