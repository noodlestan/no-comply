import { useContextValuesConsumer } from '../../../context';
import type { ContextNode } from '../../../context/private';
import { reduceContextVars, reduceContextsData } from '../../../context-apis';
import type { ThemeContextValue } from '../../types';

import type { ThemeContext } from './types';

export const createThemeContext = (value: string, node?: ContextNode): ThemeContext => {
    const resolved = useContextValuesConsumer<ThemeContextValue>('theme', value);

    const contextVars = () => reduceContextVars(resolved(), node => node.contextVars?.());

    const nodeData = (node: ThemeContextValue) => ({
        [`theme-${node.name}`]: '',
        ...node.contextData?.(),
    });
    const contextData = () => reduceContextsData(resolved(), nodeData, { theme: '' });

    const context: ThemeContext = {
        type: 'theme',
        value,
        node,
        contextVars,
        contextData,
    };

    return context;
};
