export type PressEvent = KeyboardEvent | MouseEvent;

export interface PressEventHandlers {
	onPress?: (ev: KeyboardEvent | MouseEvent) => void;
}

export interface ExtendedPressEventHandlers {
	onAltPress?: (ev: PressEvent) => void;
	onShiftPress?: (ev: PressEvent) => void;
	onLongPress?: (ev: PressEvent & { durationMs: number }) => void;
	onDoublePress?: (ev: PressEvent) => void;
}

export interface ContextMenuEventHandlers {
	onContextMenu?: (ev: PointerEvent) => void;
}
