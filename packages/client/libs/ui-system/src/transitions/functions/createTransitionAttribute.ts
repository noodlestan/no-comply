const resolveCSSVariableValue = (param: string, el?: Element): string => {
    const element = el || document.body;

    const value = getComputedStyle(element).getPropertyValue(param);
    if (!value) {
        throw new Error(`Transition parameter ${param} is undefined.`);
    }
    return value.trim();
};

const resolveValue = (value: number | string): string => {
    return typeof value === 'string' && value.startsWith('--')
        ? resolveCSSVariableValue(value)
        : value.toString();
};

export const createTransitionAttribute = (
    attribute: string | string[],
    ms: number | string = 300,
    easing: string = 'linear',
): string => {
    const resolvedMs = resolveValue(ms);
    const resolvedEasing = resolveValue(easing);

    const attributes = Array.isArray(attribute) ? attribute : [attribute];
    return attributes.map(attribute => `${attribute} ${resolvedMs}ms ${resolvedEasing}`).join(',');
};
