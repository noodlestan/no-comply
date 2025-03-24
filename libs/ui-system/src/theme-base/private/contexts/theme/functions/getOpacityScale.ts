import type { Styles } from '../../../../../dom';

export const getOpacityScale = (layer: string, value: number): Styles => {
    return { [`--o-surface-${layer}`]: String(value) };
};
