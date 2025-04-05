import type { PressableTagName } from '@noodlestan/context-ui-aria';
import type { ClassList, OwnFocusEventHandlers } from '@noodlestan/context-ui-types';

export type ButtonMixinProps = OwnFocusEventHandlers & {
    component?: PressableTagName | 'auto';
    id?: string;
    label?: string;
    href?: string;
    target?: string;
};

export type ButtonMixinElementProps = {
    classList: ClassList;
    onFocus: (ev: FocusEvent) => void;
    onBlur: (ev: FocusEvent) => void;
};

export type ButtonMixinAPI = {
    elProps: ButtonMixinElementProps;
};
