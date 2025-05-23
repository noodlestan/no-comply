import type { BaseContext } from '@noodlestan/context-ui';
import type { Accessor } from 'solid-js';

export type PopoverContextOptions = {
    id?: string;
};

export type PopoverContext = BaseContext & {
    type: 'popover';
    id: Accessor<string>;
    isShown: Accessor<boolean>;
    dismiss: () => void;
    dismissStack: () => void;
    setPopoverRef: (el: HTMLElement) => void;
    popoverEl: () => HTMLElement;
};

export type PopoverContextValue = [PopoverContext];
