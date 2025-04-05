import type { DividerTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-types';
import type {
    ClosedTagProps,
    DividerMixinElementProps,
    DividerMixinProps,
} from '@noodlestan/headless-ui';

export type DividerProps = Omit<ClosedTagProps, 'component'> &
    DividerMixinProps & {
        variant?: DividerVariant;
        length?: number | DividerLength;
    };

export type DividerVariant = 'base' | 'strong' | 'muted' | 'alt';
export type DividerLength = 's' | 'm' | 'l' | 'full';

export type DividerElementProps = Omit<ClosedTagProps, 'component'> &
    DividerMixinElementProps & {
        component: DividerTagName;
        classList: ClassList;
    };

export type DividerAPI = {
    elProps: DividerElementProps;
};
