export type ListKeyboardControllerAPI = {
    $root: {
        ref: (el: HTMLElement) => void;
        onKeyDown: (ev: KeyboardEvent) => void;
    };
};
