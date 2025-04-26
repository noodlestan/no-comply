import type { DividerTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';

export type DividerMixinProps = {
    tag?: DividerTagName;
    orientation?: DividerMixinOrientation;
};

export type DividerMixinOrientation = 'horizontal' | 'vertical';

export type DividerMixinAPI = {
    $root: {
        component: DividerTagName;
        'data-divider': DividerMixinOrientation;
        classList: ClassList;
    };
};
