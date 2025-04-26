import { createLayoutMixin } from '../../mixins';

import { type LayoutBaseAPI, type LayoutBaseProps } from './types';

export const createLayoutBase = (props: LayoutBaseProps): LayoutBaseAPI => {
    const { $root: $layoutMixinRoot } = createLayoutMixin(props);

    return {
        $root: $layoutMixinRoot,
    };
};
