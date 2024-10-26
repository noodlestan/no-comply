export const getColorStyleByHue = (varName: string, hue: number): Record<string, string> => {
    const hueValue = getComputedStyle(document.body).getPropertyValue(`--color-sw-${hue}-hue`);
    const satValue = getComputedStyle(document.body).getPropertyValue(`--color-sw-${hue}-sat`);
    return {
        [varName]: `${hueValue}, ${satValue}`,
    };
};
