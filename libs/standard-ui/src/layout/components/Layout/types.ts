import type { LayoutTagName } from '@no-comply/solid-accessibility';

import { type LayoutMixinAPI, type LayoutMixinProps } from '../../mixins';

export type LayoutProps = LayoutMixinProps & {
    tag?: LayoutTagName;
};

export type LayoutAPI = {
    $root: LayoutMixinAPI['$root'] & {
        component: LayoutTagName;
    };
};
