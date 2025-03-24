import type { ClassList } from '../types';

export function createClassList(
    styles: Record<string, string>,
    classList: ClassList,
    mappedClassList?: ClassList | undefined,
): ClassList {
    const res: ClassList = { ...mappedClassList };
    for (const key in classList) {
        if (!classList[key]) {
            continue;
        }
        if (!(key in styles)) {
            throw new Error(`Unknown class "${key}".`);
        }
        const mappedClassName = styles[key] as string;
        const value = classList[key];
        res[mappedClassName] = value;
    }
    return res;
}
