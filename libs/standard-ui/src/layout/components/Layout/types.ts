import type { ClassList } from '@noodlestan/context-ui-types';
import type {
    ClosedTagProps,
    LayoutMixinElementProps,
    LayoutMixinProps,
} from '@noodlestan/headless-ui';

export type LayoutProps = Omit<ClosedTagProps, 'component'> &
    LayoutMixinProps & {
        padding?: LayoutPadding;
    };

export type LayoutPadding = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl';

export type LayoutElementProps = Omit<ClosedTagProps, 'component'> &
    LayoutMixinElementProps & {
        classList: ClassList;
    };

export type LayoutAPI = {
    elProps: LayoutElementProps;
};
