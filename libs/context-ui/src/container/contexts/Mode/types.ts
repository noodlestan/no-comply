import type { Accessor } from 'solid-js';

import type { BaseContext, ContextDataAPI, ContextVariant, ContextVarsAPI } from '../../../context';

export type ModeContextVariant = ContextVariant &
    Partial<ContextDataAPI & ContextVarsAPI> & {
        type: 'mode';
        name: 'dark' | 'light';
    };

export type ModeContext = BaseContext &
    ContextDataAPI &
    ContextVarsAPI & {
        type: 'mode';
        value: Accessor<string>;
    };

export type ModeContextValue = [ModeContext];
