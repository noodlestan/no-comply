import type { Accessor } from 'solid-js';

export type TreeKeyboardControllerContainerProps = {
    onKeyDown: (ev: KeyboardEvent) => void;
};

export type TreeKeyboardControllerAPI = {
    containerProps: Accessor<TreeKeyboardControllerContainerProps>;
};
