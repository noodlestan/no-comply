import type { ScrollableTagName } from '@no-comply/solid-accessibility';
import type { ScrollableMixinAPI, ScrollableMixinProps } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

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
