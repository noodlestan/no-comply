import type { Accessor } from 'solid-js';

import {
    reduceContextVariantData,
    reduceContextVariantVars,
    useContextVariantsConsumer,
} from '../../../context';

import type { ThemeContext, ThemeContextValue, ThemeContextVariant } from './types';

export const createThemeContext = (value: Accessor<string>): ThemeContextValue => {
    const resolved = useContextVariantsConsumer<ThemeContextVariant>('theme', value);

    const contextVars = () => reduceContextVariantVars(resolved(), node => node.contextVars?.());

    const nodeData = (node: ThemeContextVariant) => ({
        [`theme-${node.name}`]: '',
        ...node.contextData?.(),
    });
    const contextData = () => reduceContextVariantData(resolved(), nodeData, { theme: '' });

    const context: ThemeContext = {
        type: 'theme',
        value,
        contextVars,
        contextData,
    };

    return [context];
};
