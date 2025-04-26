import type { ScrollableTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { ScrollableMixinAPI, ScrollableMixinProps } from '@noodlestan/headless-ui';

export type ScrollableProps = ScrollableMixinProps & {
    padding?: ScrollablePadding;
};

export type ScrollablePadding = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl';

export type ScrollableAPI = {
    $root: ScrollableMixinAPI['$root'] & {
        component: ScrollableTagName;
        classList: ClassList;
    };
};
