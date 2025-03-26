import { useContextValuesConsumer } from '../../context';
import type { ContextNode } from '../../context/private';
import { reduceContextVars, reduceContextsData } from '../../context-apis';
import type { ModeContextValue } from '../types';

import type { ModeContext } from './types';

export const createModeContext = (value: string, node?: ContextNode): ModeContext => {
    const resolved = useContextValuesConsumer<ModeContextValue>('mode', value);

    const contextVars = () => reduceContextVars(resolved(), node => node.contextVars?.());

    const nodeData = (node: ModeContextValue) => ({
        [`mode-${node.name}`]: '',
        ...node.contextData?.(),
    });
    const contextData = () => reduceContextsData(resolved(), nodeData, { mode: '' });

    const context: ModeContext = {
        type: 'mode',
        value,
        node,
        contextVars,
        contextData,
    };

    return context;
};
