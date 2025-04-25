import type { ScrollableTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';
import type {
    ClosedTagProps,
    ScrollableMixinAPI,
    ScrollableMixinProps,
} from '@noodlestan/headless-ui';

export type ScrollableProps = Omit<ClosedTagProps, 'component'> &
    ScrollableMixinProps & {
        padding?: ScrollablePadding;
        component?: ScrollableTagName;
    };

export type ScrollablePadding = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl';

export type ScrollableAPI = {
    elProps: Omit<ClosedTagProps, 'component'> &
        ScrollableMixinAPI['elProps'] & {
            component: ScrollableTagName;
            classList: ClassList;
        };
};
