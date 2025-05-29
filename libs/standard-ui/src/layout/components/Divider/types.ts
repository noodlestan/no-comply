import type { DividerTagName } from '@no-comply/solid-accessibility';
import type { DividerMixinAPI, DividerMixinProps } from '@no-comply/solid-composables';
import type { ClassList, Styles } from '@no-comply/solid-primitives';

export type DividerProps = DividerMixinProps & {
    variant?: DividerVariant;
    length?: number | DividerLength;
};

export type DividerVariant = 'base' | 'strong' | 'muted' | 'alt';
export type DividerLength = 's' | 'm' | 'l' | 'full';

export type DividerAPI = {
    $root: DividerMixinAPI['$root'] & {
        component: DividerTagName;
        style: Styles;
        classList: ClassList;
    };
};
