import type {
    AriaAttributes,
    PressableRoleName,
    PressableTagName,
} from '@noodlestan/context-ui-aria';
import type { PressEventHandlers } from '@noodlestan/context-ui-types';

export type PressableProps = PressEventHandlers & {
    component?: PressableTagName;
    role?: PressableRoleName;
    tabIndex?: number | null;
    disabled?: boolean;
};

export type PressableElementProps = {
    component: PressableTagName;
    role: PressableRoleName | undefined;
    tabIndex: number | undefined;
    disabled: boolean | undefined;
    onClick: (ev: MouseEvent) => void;
    onKeyDown: (ev: KeyboardEvent) => void;
    'aria-disabled': AriaAttributes['aria-disabled'];
    'data-disabled': '' | undefined;
};

export type PressableAPI = {
    elProps: PressableElementProps;
};
