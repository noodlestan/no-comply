import type {
    ButtonMixinElementProps,
    ButtonMixinProps,
    ClosedTagProps,
    PressableElementProps,
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

export type ButtonElementProps = Omit<ClosedTagProps, 'component'> &
    PressableElementProps &
    ButtonMixinElementProps;

export type ButtonAPI = {
    elProps: ButtonElementProps;
};
