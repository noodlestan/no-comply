import type { Accessor } from 'solid-js';

import type { AccessorOrValue } from '../props';

import { mapClassName } from './mapClassName';
import type { ClassList, ClassListInput } from './types';

const mapAndMergeClassList = (
    styles: Record<string, string>,
    classList: ClassList,
    res: ClassList = {},
): ClassList => {
    for (const key in classList) {
        if (!classList[key]) {
            continue;
        }
        res[mapClassName(styles, key)] = classList[key];
    }
    return res;
};

export const createClassList = (
    styles: Record<string, string>,
    classListInput: AccessorOrValue<ClassListInput>,
    mappedClassList?: Accessor<ClassList | undefined>,
): Accessor<ClassList> => {
    return () => {
        const input = typeof classListInput === 'function' ? classListInput() : classListInput;
        const mappedValues = mappedClassList?.();

        if (typeof input === 'string') {
            return { [mapClassName(styles, input)]: true, ...mappedValues };
        }

        if (!Array.isArray(input)) {
            return mapAndMergeClassList(styles, input, { ...mappedValues });
        }

        const res: ClassList = { ...mappedValues };
        for (const item of input) {
            if (typeof item === 'string') {
                res[mapClassName(styles, item)] = true;
            } else {
                mapAndMergeClassList(styles, item, res);
            }
        }
        return res;
    };
};
