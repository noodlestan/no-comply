import { type ContextNode } from '../../../context';
import { isContextDataAPI } from '../../../context-apis';
import type { DataAttributes } from '../../../dom';

export const collectContextData = (context: ContextNode): DataAttributes => {
    const values = context.valuesWith(isContextDataAPI);
    return values.reduce((acc, value) => Object.assign(acc, value.contextData()), {});
};
