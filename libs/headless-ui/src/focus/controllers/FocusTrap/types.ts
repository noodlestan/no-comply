export type FocusTrapProps = {
    focusable?: boolean;
};

export type FocusTrapContainerProps = {
    ref: (el: HTMLElement | null) => void;
    tabIndex?: number;
    onKeyDown: (ev: KeyboardEvent) => void;
    onFocusOut: (ev: FocusEvent) => void;
    'data-focus-trap': '';
};

export type FocusTrapAPI = {
    elProps: FocusTrapContainerProps;
};
