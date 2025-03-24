import { type ContextNode } from '../../../context';
import { isContextVarsAPI } from '../../../context-apis';
import type { Styles } from '../../../dom';

export const collectContextVars = (context: ContextNode): Styles => {
    const values = context.valuesWith(isContextVarsAPI);
    return values.reduce((acc, value) => Object.assign(acc, value.contextVars()), {});
};
