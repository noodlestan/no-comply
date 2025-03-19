import { createSignal } from 'solid-js';

import { FocusContextAPI, FocusContextHandlers, FocusContextOptions } from '../types';

type FocusParentAPI = {
    setFocus(): void;
};

export const createBaseFocusContextAPI = (
    options: FocusContextOptions = {},
    parent?: FocusParentAPI,
): FocusContextAPI => {
    const [children, setChildren] = createSignal<FocusContextAPI[]>([]);
    const [hasFocus, setHasFocus] = createSignal(false);

    const handlers: FocusContextHandlers = {
        onFocusIn: () => setHasFocus(true),
        onFocusOut: () => setHasFocus(false),
    };

    const setFocus = () => {
        const target = options.target?.();
        if (target) {
            target();
            return;
        }
        parent?.setFocus();
    };

    const parentAPI = {
        setFocus,
    };

    const createChildContext = (options: FocusContextOptions = {}) => {
        const child = createBaseFocusContextAPI(options, parentAPI);
        setChildren(prev => [...prev, child]);
        return child;
    };

    const removeChildContext = (child: FocusContextAPI) => {
        setChildren(prev => prev.filter(c => c !== child));
    };

    const hasFocusWithin = () => {
        return hasFocus() || children().some(c => c.hasFocusWithin);
    };

    const api: FocusContextAPI = {
        id: options.id,
        index: options.index,
        handlers,
        setFocus,
        hasFocus,
        hasFocusWithin,
        value: { createChildContext, removeChildContext },
    };

    return api;
};
