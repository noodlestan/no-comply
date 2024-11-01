const TRANSITION_REGEXP =
    /^(?:(?:(?!,)([a-zA-Z-]+)\s+(\d+ms|\d+s)(?:\s+([a-zA-Z-]+))?)(?:,\s*)?)+$/;

export const extractTransitionFromStyle = (
    styles: Partial<CSSStyleDeclaration>,
): string | undefined => {
    if (styles.transition) {
        if (!TRANSITION_REGEXP.test(styles.transition)) {
            throw new Error(`Invalid transition: "${styles.transition}".`);
        }

        const transition = styles.transition;
        delete styles.transition;
        return transition;
    }
};
