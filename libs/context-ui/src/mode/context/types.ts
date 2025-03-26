import type { BaseContext } from '../../context';
import type { ContextDataAPI, ContextVarsAPI } from '../../context-apis';

export type ModeContext = BaseContext &
    ContextDataAPI &
    ContextVarsAPI & {
        type: 'mode';
        value: string;
    };
