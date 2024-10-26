const OPACITY_VARS: Record<string, number> = {
    transparent: 0,
    ghost: 0.2,
    faded: 0.4,
    mid: 0.6,
    translucid: 0.8,
    opaque: 1,
};

export const getOpacityScale = (layer: string, value: number): Record<string, string> => {
    const scale: Record<string, string> = {};

    Object.entries(OPACITY_VARS).forEach(([scaleKey, scaleValue]) => {
        const opacity = String(OPACITY_VARS[scaleKey] * value * scaleValue);
        scale[`--o-surface-${layer}-${scaleKey}`] = opacity;
    });

    return scale;
};
