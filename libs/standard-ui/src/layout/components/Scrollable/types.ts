import type { ScrollableTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-types';
import type {
    ClosedTagProps,
    ScrollableMixinElementProps,
    ScrollableMixinProps,
} from '@noodlestan/headless-ui';

export type ScrollableProps = Omit<ClosedTagProps, 'component'> &
    ScrollableMixinProps & {
        padding?: ScrollablePadding;
        component?: ScrollableTagName;
    };

export type ScrollablePadding = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl';

export type ScrollableElementProps = Omit<ClosedTagProps, 'component'> &
    ScrollableMixinElementProps & {
        component: ScrollableTagName;
        classList: ClassList;
    };

export type ScrollableAPI = {
    elProps: ScrollableElementProps;
};
