import type { Styles } from '@noodlestan/context-ui-types';

import { type ContextNode } from '../../../context';
import { isContextVarsAPI } from '../../../context-apis';

export const collectContextVars = (context: ContextNode): Styles => {
    const values = context.valuesWith(isContextVarsAPI);
    return values.reduce((acc, value) => Object.assign(acc, value.contextVars()), {});
};
