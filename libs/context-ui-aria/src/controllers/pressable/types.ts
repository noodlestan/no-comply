import type {
    AriaAttributes,
    PressableRoleName,
    PressableTagName,
} from '@noodlestan/context-ui-aria';

export type PressableType = 'button' | 'submit' | 'reset';

export type AriaPressableProps = {
    component?: PressableTagName;
    role?: PressableRoleName;
    type?: PressableType;
    tabIndex?: number | null;
    disabled?: boolean;
};

export type AriaPressableAPI = {
    elProps: {
        component: PressableTagName;
        role: PressableRoleName | undefined;
        type: PressableType | undefined;
        tabIndex: number | undefined;
        disabled: boolean | undefined;
        'aria-disabled': AriaAttributes['aria-disabled'];
        'data-disabled': '' | undefined;
    };
};
