export const mergeHandlerProps = (
    props: Record<string, unknown>,
    handlersToMerge: Record<string, unknown>,
): Record<string, unknown> => {
    const mergedProps: Record<string, unknown> = { ...props };

    for (const key in handlersToMerge) {
        if (handlersToMerge[key] === undefined) {
            continue;
        }

        if (key in props) {
            const existingHandler = props[key];
            const newHandler = handlersToMerge[key];

            if (typeof existingHandler === 'function' && typeof newHandler === 'function') {
                mergedProps[key] = (...args: unknown[]) => {
                    (existingHandler as (...args: unknown[]) => void)(...args);
                    (newHandler as (...args: unknown[]) => void)(...args);
                };
            } else {
                throw new Error(`Conflicting handler types for ${key}: both must be functions.`);
            }
        } else {
            mergedProps[key] = handlersToMerge[key];
        }
    }

    return mergedProps;
};
