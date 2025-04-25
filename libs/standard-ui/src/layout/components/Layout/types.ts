import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { ClosedTagProps, LayoutMixinAPI, LayoutMixinProps } from '@noodlestan/headless-ui';

export type LayoutProps = Omit<ClosedTagProps, 'component'> &
    LayoutMixinProps & {
        padding?: LayoutPadding;
    };

export type LayoutPadding = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl';

export type LayoutAPI = {
    elProps: Omit<ClosedTagProps, 'component'> &
        LayoutMixinAPI['elProps'] & {
            classList: ClassList;
        };
};
