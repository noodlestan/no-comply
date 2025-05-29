/* eslint-disable dot-notation */
import type { ClassList } from '../../../classes';
import type { AccessorOrValue } from '../../types';

import { resolveSource } from './resolveSource';
import type { Props } from './types';

export function getClassListProperty(sources: AccessorOrValue<Props>[]): ClassList {
    const classLists: (() => ClassList)[] = [];
    for (let i = 0; i < sources.length; i++) {
        const resolvedSource = resolveSource(sources[i]);
        const classList = resolvedSource['classList'] as AccessorOrValue<ClassList>;
        if (classList) {
            classLists.push(typeof classList === 'function' ? classList : () => classList);
        }
    }
    return classLists.reduce((acc, fn) => ({ ...acc, ...fn() }), {});
}
