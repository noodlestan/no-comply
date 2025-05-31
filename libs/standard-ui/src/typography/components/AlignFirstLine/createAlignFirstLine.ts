import {
    type PickRequired,
    combineProps,
    computedProps,
    pickProps,
} from '@no-comply/solid-primitives';

import {
    COMPOSABLE_TYPE_MIXIN_PROPS,
    type ComposableTypeMixinProps,
    createAlignFirstLineMixin,
    createComposableTypeMixin,
} from '../../mixins';

import type { AlignFirstLineAPI, AlignFirstLineAllProps, AlignFirstLineProps } from './types';

const defaultProps: PickRequired<AlignFirstLineProps, 'tag'> = {
    tag: 'div',
};

export const createAlignFirstLine = (props: AlignFirstLineProps): AlignFirstLineAPI => {
    const { $root: $alignFirstLineRoot } = createAlignFirstLineMixin(props);
    const { $root: $composableTypeRoot } = createComposableTypeMixin(props);

    const component = () => props.tag ?? defaultProps.tag;
    const $root = computedProps({
        component,
    });

    const composableTypeProps = pickProps(
        props as AlignFirstLineAllProps,
        COMPOSABLE_TYPE_MIXIN_PROPS,
    ) as ComposableTypeMixinProps;

    return {
        $root: combineProps($alignFirstLineRoot, $composableTypeRoot, $root),
        composableTypeProps,
    };
};
