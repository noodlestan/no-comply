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

type AriaPressableRoot = {
    component: PressableTagName;
    type: PressableType | undefined;
    tabIndex: number | undefined;
    disabled: boolean | undefined;
    'aria-disabled': AriaAttributes['aria-disabled'];
    'data-disabled': '' | undefined;
};

export type AriaPressableAPI<T extends PressableRoleName = PressableRoleName> = {
    $root: AriaPressableRoot & {
        role: T;
    };
};

export type AriaGenericPressableAPI = {
    $root: AriaPressableRoot & {
        role: PressableRoleName | undefined;
    };
};
