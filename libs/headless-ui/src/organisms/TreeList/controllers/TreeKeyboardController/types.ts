export type TreeKeyboardControllerContainerProps = {
    onKeyDown: (ev: KeyboardEvent) => void;
};

export type TreeKeyboardControllerAPI = {
    containerProps: TreeKeyboardControllerContainerProps;
};
