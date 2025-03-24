import type { ContextValue } from '../context';
import type { ContextDataAPI, ContextVarsAPI } from '../context-apis';
import type { ModeContextValue } from '../mode';
import type { TokenMap } from '../tokens';

export type ThemeContextValue = ContextValue &
    Partial<ContextDataAPI & ContextVarsAPI> & {
        type: 'theme';
        mode: ModeContextValue['name'];
        tokens: TokenMap;
    };
