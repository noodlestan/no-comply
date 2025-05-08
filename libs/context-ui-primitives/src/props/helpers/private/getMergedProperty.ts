import type { AccessorOrValue } from '../../types';

import { getClassListProperty } from './getClassListProperty';
import { getHandlerProperty } from './getHandlerProperty';
import { getStyleProperty } from './getStyleProperty';
import { resolveSource } from './resolveSource';
import { type Props } from './types';

export function getMergedProperty(sources: AccessorOrValue<Props>[], key: string): unknown {
    if (key === '$PROXY') {
        return true;
    }

    for (let i = sources.length - 1; i >= 0; i--) {
        const resolved = resolveSource(sources[i]);
        if (key in resolved) {
            if (key === 'classList') {
                return getClassListProperty(sources);
            }
            if (key === 'style') {
                return getStyleProperty(sources);
            }
            if (key === 'ref') {
                return getHandlerProperty(sources, key);
            }
            if (key.startsWith('on')) {
                return getHandlerProperty(sources, key);
            }
            return resolved[key];
        }
    }
    return undefined;
}
