import type { Accessor } from 'solid-js';

import type { BaseContext } from '../../../context';

export type FocusTarget = () => void;

export type FocusContextOptions = {
    autoFocus?: boolean;
    index?: number;
};

export type FocusContext = BaseContext & {
    type: 'focus';
    index?: number;
    setTargetRef: (el: HTMLElement) => void;
    setFocus: () => void;
    hasFocus: Accessor<boolean>;
    setHasFocus: (has: boolean) => void;
    hasFocusWithin: Accessor<boolean>;
    setHasFocusWithin: (has: boolean) => void;
};
