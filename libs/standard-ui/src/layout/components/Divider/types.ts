import type { DividerTagName } from '@noodlestan/context-ui-aria';
import type { ClassList, Styles } from '@noodlestan/context-ui-primitives';
import type { DividerMixinAPI, DividerMixinProps } from '@noodlestan/headless-ui';

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
