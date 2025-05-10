import type { LayoutTagName } from '@noodlestan/context-ui-aria';

import type { LayoutMixinAPI, LayoutMixinProps } from '../../mixins';

export type LayoutBaseProps = LayoutMixinProps & {
    tag?: LayoutTagName;
};

export type LayoutBaseAPI = {
    $root: LayoutMixinAPI['$root'] & {
        component: LayoutTagName;
    };
};
