import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { ClosedTagProps, IconMixinAPI, IconMixinProps } from '@noodlestan/headless-ui';

export type IconProps = Omit<ClosedTagProps, 'component'> &
    IconMixinProps & {
        size?: IconSize;
    };

export type IconSize = 'xs' | 's' | 'm' | 'l';

export type IconAPI = {
    elProps: Omit<ClosedTagProps, 'component'> &
        IconMixinAPI['elProps'] & {
            classList: ClassList;
        };
};
