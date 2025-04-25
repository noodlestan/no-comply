import type { DividerTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { ClosedTagProps, DividerMixinAPI, DividerMixinProps } from '@noodlestan/headless-ui';

export type DividerProps = Omit<ClosedTagProps, 'component'> &
    DividerMixinProps & {
        variant?: DividerVariant;
        length?: number | DividerLength;
    };

export type DividerVariant = 'base' | 'strong' | 'muted' | 'alt';
export type DividerLength = 's' | 'm' | 'l' | 'full';

export type DividerAPI = {
    elProps: Omit<ClosedTagProps, 'component'> &
        DividerMixinAPI['elProps'] & {
            component: DividerTagName;
            classList: ClassList;
        };
};
