import type { ClassList } from '@noodlestan/context-ui-types';
import type {
    ClosedTagProps,
    IconMixinElementProps,
    IconMixinProps,
} from '@noodlestan/headless-ui';

export type IconProps = Omit<ClosedTagProps, 'component'> &
    IconMixinProps & {
        size?: IconSize;
    };

export type IconSize = 'xs' | 's' | 'm' | 'l';

export type IconElementProps = Omit<ClosedTagProps, 'component'> &
    IconMixinElementProps & {
        classList: ClassList;
    };

export type IconAPI = {
    elProps: IconMixinElementProps;
};
