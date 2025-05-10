import type { LayoutTagName } from '@noodlestan/context-ui-aria';

import { type LayoutMixinAPI, type LayoutMixinProps } from '../../mixins';

export type LayoutProps = LayoutMixinProps & {
    tag?: LayoutTagName;
};

export type LayoutAPI = {
    $root: LayoutMixinAPI['$root'] & {
        component: LayoutTagName;
    };
};
