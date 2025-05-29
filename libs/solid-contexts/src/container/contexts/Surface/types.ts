import type { Accessor } from 'solid-js';

import type { BaseContext, ContextDataAPI, ContextVariant, ContextVarsAPI } from '../../../context';

export type SurfaceContextVariant = ContextVariant &
    Partial<ContextDataAPI & ContextVarsAPI> & {
        type: 'surface';
    };

export type SurfaceContext = BaseContext &
    ContextDataAPI<'data-surface'> &
    ContextVarsAPI & {
        type: 'surface';
        value: Accessor<string>;
    };

export type SurfaceContextValue = [SurfaceContext];
