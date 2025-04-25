import type { DividerTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';

export type DividerMixinProps = {
    component?: DividerTagName;
    orientation?: DividerMixinOrientation;
};

export type DividerMixinOrientation = 'horizontal' | 'vertical';

export type DividerMixinAPI = {
    elProps: {
        component: DividerTagName;
        'data-divider': DividerMixinOrientation;
        classList: ClassList;
    };
};
