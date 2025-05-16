export type FocusRingAPI = {
    $root: {
        onKeyDown: (ev: KeyboardEvent) => void;
        'data-is-active': string | undefined;
    };
};
