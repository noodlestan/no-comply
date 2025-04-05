import type { BaseContext } from '../../../context';
import type { ContextDataAPI, ContextVarsAPI } from '../../../context-apis';

export type SurfaceContext = BaseContext &
    ContextDataAPI<'data-surface'> &
    ContextVarsAPI & {
        type: 'surface';
        value: string;
    };
