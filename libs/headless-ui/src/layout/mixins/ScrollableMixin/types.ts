import type { ScrollableTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';

export type ScrollableMixinProps = {
    component?: ScrollableTagName;
    y?: boolean;
    z?: boolean;
};

export type ScrollableMixinAPI = {
    elProps: {
        component: ScrollableTagName;
        classList: ClassList;
    };
};
