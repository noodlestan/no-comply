export function createClassListMapper(
    styles: Record<string, string>,
    classList: () => Record<string, boolean>,
): () => Record<string, boolean> {
    return () => {
        const list = classList();
        const res: Record<string, boolean> = {};
        for (const key in list) {
            if (!(key in styles)) {
                throw new Error(`Unknown class "${key}".`);
            }
            const mappedClassName = styles[key];
            const value = list[key];
            res[mappedClassName] = value;
        }
        return res;
    };
}
