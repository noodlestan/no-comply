import type { ContextValue } from '../context';
import type { ContextDataAPI, ContextVarsAPI } from '../context-apis';

export type ModeContextValue = ContextValue &
    Partial<ContextDataAPI & ContextVarsAPI> & {
        type: 'mode';
        name: 'dark' | 'light';
    };
