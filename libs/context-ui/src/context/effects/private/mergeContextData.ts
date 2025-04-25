import type { DataAttributes } from '@noodlestan/context-ui-primitives';

import type { BaseContext, ContextDataAPI } from '../..';
import { isContextDataAPI } from '../../private';

export const mergeContextData = (contexts: BaseContext[]): DataAttributes => {
    const values = contexts.filter(isContextDataAPI) as unknown as ContextDataAPI[];
    return values.reduce((acc, value) => Object.assign(acc, value.contextData()), {});
};
