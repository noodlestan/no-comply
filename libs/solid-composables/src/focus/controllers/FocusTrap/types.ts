export type FocusTrapProps = {
    focusable?: boolean;
};

export type FocusTrapAPI = {
    $root: {
        ref: (el: HTMLElement | null) => void;
        tabIndex?: number;
        onKeyDown: (ev: KeyboardEvent) => void;
        onFocusOut: (ev: FocusEvent) => void;
        'data-focus-trap': '';
        'data-focus-trap-focusable': '' | undefined;
    };
};
