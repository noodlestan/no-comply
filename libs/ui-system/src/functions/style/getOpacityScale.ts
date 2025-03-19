export const getOpacityScale = (layer: string, value: number): Record<string, string> => {
    return { [`--o-surface-${layer}`]: String(value) };
};
