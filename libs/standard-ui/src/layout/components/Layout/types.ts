import { type ClassList } from '@noodlestan/context-ui-primitives';
import { type LayoutMixinAPI, type LayoutMixinProps } from '@noodlestan/headless-ui';

export type LayoutProps = LayoutMixinProps & {
    padding?: LayoutPadding;
};

export type LayoutPadding = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl';

export type LayoutAPI = {
    $root: LayoutMixinAPI['$root'] & {
        classList: ClassList;
    };
};
