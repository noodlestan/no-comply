import type { ScrollableTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-types';

export type ScrollableMixinProps = {
    component?: ScrollableTagName;
    y?: boolean;
    z?: boolean;
};

export type ScrollableMixinElementProps = {
    component: ScrollableTagName;
    classList: ClassList;
};

export type ScrollableMixinAPI = {
    elProps: ScrollableMixinElementProps;
};
