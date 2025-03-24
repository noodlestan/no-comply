import type { ContextValue } from '../context';
import type { ContextDataAPI, ContextVarsAPI } from '../context-apis';

export type SurfaceContextValue = ContextValue &
    Partial<ContextDataAPI & ContextVarsAPI> & {
        type: 'surface';
    };
