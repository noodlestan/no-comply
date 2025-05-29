import type { LayoutTagName } from '@no-comply/solid-accessibility';

import type { LayoutMixinAPI, LayoutMixinProps } from '../../mixins';

export type LayoutBaseProps = LayoutMixinProps & {
    tag?: LayoutTagName;
};

export type LayoutBaseAPI = {
    $root: LayoutMixinAPI['$root'] & {
        component: LayoutTagName;
    };
};
