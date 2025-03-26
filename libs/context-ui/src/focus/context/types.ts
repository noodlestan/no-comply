import type { Accessor, JSX } from 'solid-js';

import type { BaseContext } from '../../context';

export type FocusTarget = () => void;

export type FocusContextOptions = {
    index?: number;
};

export type FocusContextContainerProps = {
    onFocusIn: JSX.FocusEventHandlerUnion<HTMLElement, FocusEvent>;
    onFocusOut: JSX.FocusEventHandlerUnion<HTMLElement, FocusEvent>;
};

export type FocusContextTargetProps = {
    ref: (el: HTMLElement) => void;
    onFocus: JSX.FocusEventHandlerUnion<HTMLElement, FocusEvent>;
    onBlur: JSX.FocusEventHandlerUnion<HTMLElement, FocusEvent>;
};

export type FocusContext = BaseContext & {
    index?: number;
    setFocus: () => void;
    hasFocus: Accessor<boolean>;
    hasFocusWithin: Accessor<boolean>;
    containerProps: FocusContextContainerProps;
    targetProps: FocusContextTargetProps;
};
