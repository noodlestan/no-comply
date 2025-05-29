import type { Accessor } from 'solid-js';

import type { BaseContext } from '../../../../context';

export type FocusContextOptions = {
    disabled?: boolean;
    autoFocus?: boolean;
};

export type FocusContext = BaseContext & {
    type: 'focus';
    setTargetRef: (el: HTMLElement) => void;
    isDisabled: Accessor<boolean>;
    setFocus: () => void;
    hasFocus: Accessor<boolean>;
    setHasFocus: (has: boolean) => void;
    hasFocusWithin: Accessor<boolean>;
    setHasFocusWithin: (has: boolean) => void;
};

export type FocusContextOwnerAPI = {
    addChild: (child: FocusContext) => void;
    removeChild: (child: FocusContext) => void;
};

export type FocusContextValue = [FocusContext, FocusContextOwnerAPI];
