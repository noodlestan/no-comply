import { combineProps } from '@no-comply/solid-primitives';

import { createFlexMixin } from '../../mixins';
import { createLayoutBase } from '../LayoutBase';

import { type FlexBaseAPI, type FlexBaseProps } from './types';

export const createFlexBase = (props: FlexBaseProps): FlexBaseAPI => {
    const { $root: $layoutMixinRoot } = createLayoutBase(props);
    const { $root: $flexMixinRoot } = createFlexMixin(props);

    return {
        $root: combineProps($layoutMixinRoot, $flexMixinRoot),
    };
};
