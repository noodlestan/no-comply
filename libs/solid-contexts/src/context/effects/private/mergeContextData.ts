import type { DataAttributes } from '@no-comply/solid-primitives';

import { isContextDataAPI } from '../../private';
import type { BaseContext, ContextDataAPI } from '../../types';

export const mergeContextData = (contexts: BaseContext[]): DataAttributes => {
    const values = contexts.filter(isContextDataAPI) as unknown as ContextDataAPI[];
    return values.reduce((acc, value) => Object.assign(acc, value.contextData()), {});
};
