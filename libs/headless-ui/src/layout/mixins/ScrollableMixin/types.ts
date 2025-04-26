import type { ScrollableTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';

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
