import type {
    ButtonMixinAPI,
    ButtonMixinProps,
    ClosedTagProps,
    PressableAPI,
    PressableProps,
} from '@noodlestan/headless-ui';

export type ButtonProps = Omit<ClosedTagProps, 'component'> &
    ButtonMixinProps &
    PressableProps & {
        variant?: ButtonVariant;
        size?: ButtonSize;
    };

export type ButtonVariant = 'primary' | 'secondary' | 'plain' | 'danger' | 'transparent';
export type ButtonSize = 'xs' | 's' | 'm' | 'l';

export type ButtonAPI = {
    elProps: Omit<ClosedTagProps, 'component'> &
        PressableAPI['elProps'] &
        ButtonMixinAPI['elProps'];
};
