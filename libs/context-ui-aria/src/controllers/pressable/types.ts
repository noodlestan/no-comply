import type {
    AriaAttributes,
    PressableRoleName,
    PressableTagName,
} from '@noodlestan/context-ui-aria';

export type PressableType = 'button' | 'submit' | 'reset';

export type AriaPressableProps = {
    tag?: PressableTagName;
    role?: PressableRoleName;
    type?: PressableType;
    tabIndex?: number | null;
    disabled?: boolean;
};

export type AriaPressableAPI = {
    $root: {
        component: PressableTagName;
        role: PressableRoleName | undefined;
        type: PressableType | undefined;
        tabIndex: number | undefined;
        disabled: boolean | undefined;
        'aria-disabled': AriaAttributes['aria-disabled'];
        'data-disabled': '' | undefined;
    };
};
