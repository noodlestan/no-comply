import type { Accessor } from 'solid-js';

import type { BaseContext } from '../../context';

export type FocusTarget = () => void;

export type FocusContextOptions = {
    target?: Accessor<FocusTarget | undefined>;
    index?: number;
};

export type FocusContextHandlers = {
    onFocusIn: () => void;
    onFocusOut: (ev: FocusEvent) => void;
};

export type FocusContext = BaseContext & {
    index?: number;
    setFocus: () => void;
    hasFocus: Accessor<boolean>;
    hasFocusWithin: Accessor<boolean>;
    handlers: FocusContextHandlers;
};
