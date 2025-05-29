export type PressEvent = KeyboardEvent | MouseEvent;

export type PressEventHandlers = {
    onPress?: (ev: KeyboardEvent | MouseEvent) => void;
};

export type ExtendedPressEventHandlers = {
    onAltPress?: (ev: PressEvent) => void;
    onShiftPress?: (ev: PressEvent) => void;
    onLongPress?: (ev: PressEvent & { durationMs: number }) => void;
    onDoublePress?: (ev: PressEvent) => void;
};

export type ContextMenuEventHandlers = {
    onContextMenu?: (ev: PointerEvent) => void;
};
