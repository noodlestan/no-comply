import { mergeProps } from '@noodlestan/context-ui-primitives';

import { createFlexMixin } from '../../mixins';
import { createLayout } from '../Layout';

import { type FlexAPI, type FlexProps } from './types';

export const createFlex = (props: FlexProps): FlexAPI => {
    const { $root: $layoutRoot } = createLayout(props);
    const { $root: $flexMixinRoot } = createFlexMixin(props);

    return {
        $root: mergeProps($layoutRoot, $flexMixinRoot),
    };
};
