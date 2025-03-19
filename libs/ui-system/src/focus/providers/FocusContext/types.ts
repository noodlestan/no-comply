import { Accessor } from 'solid-js';

import { ContextId } from '../../../context';

export type FocusTarget = () => void;

export type FocusContextOptions = {
    target?: Accessor<FocusTarget>;
    index?: number;
    id?: ContextId;
};

export type FocusContextHandlers = {
    onFocusIn: () => void;
    onFocusOut: () => void;
};

export type FocusContextValue = {
    createChildContext: (options?: FocusContextOptions) => FocusContextAPI;
    removeChildContext: (child: FocusContextAPI) => void;
};

export type FocusContextAPI = {
    id?: ContextId;
    index?: number;
    setFocus: () => void;
    hasFocus: Accessor<boolean>;
    hasFocusWithin: Accessor<boolean>;
    handlers: FocusContextHandlers;
    value: FocusContextValue;
};
