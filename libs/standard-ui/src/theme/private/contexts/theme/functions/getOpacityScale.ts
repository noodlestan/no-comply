import type { Styles } from '@noodlestan/context-ui-types';

export const getOpacityScale = (layer: string, value: number): Styles => {
    return { [`--o-surface-${layer}`]: String(value) };
};
