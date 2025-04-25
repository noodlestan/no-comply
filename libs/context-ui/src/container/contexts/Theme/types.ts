import type { Accessor } from 'solid-js';

import type { BaseContext, ContextDataAPI, ContextVariant, ContextVarsAPI } from '../../../context';
import type { ModeContextVariant } from '../Mode';

export type ThemeContextVariant = ContextVariant &
    Partial<ContextDataAPI & ContextVarsAPI> & {
        type: 'theme';
        mode: ModeContextVariant['name'];
    };

export type ThemeContext = BaseContext &
    ContextDataAPI &
    ContextVarsAPI & {
        type: 'theme';
        value: Accessor<string>;
    };

export type ThemeContextValue = [ThemeContext];
