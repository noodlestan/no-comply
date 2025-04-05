import type { DividerTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-types';

export type DividerMixinProps = {
    component?: DividerTagName;
    orientation?: DividerMixinOrientation;
};

export type DividerMixinOrientation = 'horizontal' | 'vertical';

export type DividerMixinElementProps = {
    component: DividerTagName;
    classList: ClassList;
};

export type DividerMixinAPI = {
    elProps: DividerMixinElementProps;
};
