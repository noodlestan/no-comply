import { mergeProps } from '@noodlestan/context-ui-primitives';

import { createFlexMixin, createLayoutMixin } from '../../mixins';

import { type FlexBaseAPI, type FlexBaseProps } from './types';

export const createFlexBase = (props: FlexBaseProps): FlexBaseAPI => {
    const { $root: $layoutMixinRoot } = createLayoutMixin(props);
    const { $root: $flexMixinRoot } = createFlexMixin(props);

    return {
        $root: mergeProps($layoutMixinRoot, $flexMixinRoot),
    };
};
