import type { Accessor, JSX } from 'solid-js';

import type { AriaLabelProps, AriaRegionOptions, AriaRegionProps } from '../aria';

import type { FocusContextContainerProps, FocusContextTargetProps } from './context';

export type FocusableDataProps = {
    'data-focusable': string;
    'data-focusable-has-focus'?: string;
};

export type FocusableContainerProps = AriaRegionProps &
    FocusContextContainerProps &
    FocusableDataProps & {
        onMouseDown: JSX.EventHandler<HTMLElement, MouseEvent>;
    };

export type FocusableTargetProps = FocusContextTargetProps & {
    'aria-hidden': boolean;
};

export type FocusableAPI = {
    containerProps: Accessor<FocusableContainerProps>;
    targetProps: Accessor<FocusableTargetProps>;
    labelProps: Accessor<AriaLabelProps>;
    isFocused: () => boolean;
    setFocus: () => void;
};

export type FocusableOptions = AriaRegionOptions & {
    tabIndex?: number;
};
