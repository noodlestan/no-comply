export type PointerEventHandlers = {
    onPointerDown?: (ev: PointerEvent) => void;
    onPointerUp?: (ev: PointerEvent) => void;
    onPointerMove?: (ev: PointerEvent) => void;
    onPointerOver?: (ev: PointerEvent) => void;
    onPointerOut?: (ev: PointerEvent) => void;
    onPointerEnter?: (ev: PointerEvent) => void;
    onPointerLeave?: (ev: PointerEvent) => void;
    onPointerCancel?: (ev: PointerEvent) => void;
};

export type PointerCaptureEventHandlers = {
    onGotPointerCapture?: (ev: PointerEvent) => void;
    onLostPointerCapture?: (ev: PointerEvent) => void;
};

export type KeyboardEventHandlers = {
    onKeyDown?: (ev: KeyboardEvent) => void;
    onKeyUp?: (ev: KeyboardEvent) => void;
};

export type OwnFocusEventHandlers = {
    onFocus?: (ev: FocusEvent) => void;
    onBlur?: (ev: FocusEvent) => void;
};

export type FocusEventHandlers = OwnFocusEventHandlers & {
    onFocusIn?: (ev: FocusEvent) => void;
    onFocusOut?: (ev: FocusEvent) => void;
};

export type InputEventHandlers = {
    onInput?: (ev: InputEvent) => void;
    onChange?: (ev: Event) => void;
    onBeforeInput?: (ev: InputEvent) => void;
};

export type InputCompositionEventHandlers = {
    onCompositionStart?: (ev: CompositionEvent) => void;
    onCompositionUpdate?: (ev: CompositionEvent) => void;
    onCompositionEnd?: (ev: CompositionEvent) => void;
};

export type ClipboardEventHandlers = {
    onCopy?: (ev: ClipboardEvent) => void;
    onCut?: (ev: ClipboardEvent) => void;
    onPaste?: (ev: ClipboardEvent) => void;
};

export type ScrollEventHandlers = {
    onScroll?: (ev: Event) => void;
};

export type DragEventHandlers = {
    onDrag?: (ev: DragEvent) => void;
    onDragStart?: (ev: DragEvent) => void;
    onDragEnd?: (ev: DragEvent) => void;
    onDragOver?: (ev: DragEvent) => void;
    onDragEnter?: (ev: DragEvent) => void;
    onDragLeave?: (ev: DragEvent) => void;
    onDrop?: (ev: DragEvent) => void;
};

export type FormEventHandlers = {
    onSubmit?: (ev: SubmitEvent) => void;
    onReset?: (ev: Event) => void;
};

export type AnimationEventHandlers = {
    onAnimationStart?: (ev: AnimationEvent) => void;
    onAnimationEnd?: (ev: AnimationEvent) => void;
    onAnimationIteration?: (ev: AnimationEvent) => void;
};

export type TransitionEventHandlers = {
    onTransitionStart?: (ev: TransitionEvent) => void;
    onTransitionEnd?: (ev: TransitionEvent) => void;
};

export type PageEventHandlers = {
    onBeforeUnload?: (ev: BeforeUnloadEvent) => void;
    onVisibilityChange?: (ev: Event) => void;
};
