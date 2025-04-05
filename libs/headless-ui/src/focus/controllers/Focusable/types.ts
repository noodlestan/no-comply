import type {
    AriaLabelElementProps,
    AriaRegionElementProps,
    AriaRegionProps,
    FocusableTagName,
} from '@noodlestan/context-ui-aria';

export type FocusableProps = AriaRegionProps & {
    component?: FocusableTagName;
    tabIndex?: number;
    disabled?: boolean;
};

export type FocusableContainerProps = AriaRegionElementProps & {
    component: FocusableTagName;
    onPointerDown: (ev: PointerEvent) => void;
    onFocusIn: (ev: FocusEvent) => void;
    onFocusOut: (ev: FocusEvent) => void;
    'data-focusable': string;
    'data-disabled': string | undefined;
    'data-focusable-has-focus': string;
};

export type FocusableTargetProps = {
    ref: (el: HTMLElement) => void;
    onFocus: (ev: FocusEvent) => void;
    onBlur: (ev: FocusEvent) => void;
    disabled: boolean | undefined;
    'aria-hidden': boolean;
    'data-focusable-target': '';
};

export type FocusableAPI = {
    containerProps: FocusableContainerProps;
    targetProps: FocusableTargetProps;
    labelProps: AriaLabelElementProps;
    isFocused: () => boolean;
    setFocus: () => void;
};
