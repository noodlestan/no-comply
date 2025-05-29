import type { ScrollableTagName } from '@no-comply/solid-accessibility';
import type { ClassList } from '@no-comply/solid-primitives';

export type ScrollableMixinProps = {
    tag?: ScrollableTagName;
    x?: boolean;
    y?: boolean;
};

export type ScrollableMixinAPI = {
    $root: {
        component: ScrollableTagName;
        classList: ClassList;
    };
};
