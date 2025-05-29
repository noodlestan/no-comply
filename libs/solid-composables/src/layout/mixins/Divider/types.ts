import type { DividerTagName } from '@no-comply/solid-accessibility';
import type { ClassList } from '@no-comply/solid-primitives';

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
