import type { PressableTagName } from '@noodlestan/context-ui-aria';
import type { ClassList, OwnFocusEventHandlers } from '@noodlestan/context-ui-primitives';

export type ButtonMixinProps = OwnFocusEventHandlers & {
    component?: PressableTagName | 'auto';
    id?: string;
    label?: string;
    href?: string;
    target?: string;
};

export type ButtonMixinAPI = {
    elProps: {
        classList: ClassList;
        onFocus: (ev: FocusEvent) => void;
        onBlur: (ev: FocusEvent) => void;
    };
};
