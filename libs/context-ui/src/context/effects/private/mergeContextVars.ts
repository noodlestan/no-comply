import type { Styles } from '@noodlestan/context-ui-primitives';

import { type BaseContext } from '../..';
import { type ContextVarsAPI, isContextVarsAPI } from '../../private';

export const mergeContextVars = (context: BaseContext[]): Styles => {
    const values = context.filter(isContextVarsAPI) as unknown as ContextVarsAPI[];
    return values.reduce((acc, value) => Object.assign(acc, value.contextVars()), {});
};
