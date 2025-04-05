import type { BaseContext } from '../../../context';
import type { ContextDataAPI, ContextVarsAPI } from '../../../context-apis';

export type ThemeContext = BaseContext &
    ContextDataAPI &
    ContextVarsAPI & {
        type: 'theme';
        value: string;
    };
