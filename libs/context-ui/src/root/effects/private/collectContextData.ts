import type { DataAttributes } from '@noodlestan/context-ui-types';

import { type ContextNode } from '../../../context';
import { isContextDataAPI } from '../../../context-apis';

export const collectContextData = (context: ContextNode): DataAttributes => {
    const values = context.valuesWith(isContextDataAPI);
    return values.reduce((acc, value) => Object.assign(acc, value.contextData()), {});
};
