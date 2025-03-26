import { type ContextNode, useContextValuesConsumer } from '../../context';
import { reduceContextVars, reduceContextsData } from '../../context-apis';
import type { SurfaceContextValue } from '../types';

import type { SurfaceContext } from './types';

export const createSurfaceContext = (value: string, node?: ContextNode): SurfaceContext => {
    const resolved = useContextValuesConsumer<SurfaceContextValue>('surface', value);

    const contextVars = () => reduceContextVars(resolved(), node => node.contextVars?.());

    const nodeData = (node: SurfaceContextValue) => ({
        [`surface-${node.name}`]: '',
        ...node.contextData?.(),
    });
    const contextData = () => reduceContextsData(resolved(), nodeData, { surface: '' });

    return {
        type: 'surface',
        value,
        node,
        contextVars,
        contextData,
    };
};
