import type { Styles } from '@no-comply/solid-primitives';

import { type ContextVarsAPI, isContextVarsAPI } from '../../private';
import { type BaseContext } from '../../types';

export const mergeContextVars = (context: BaseContext[]): Styles => {
	const values = context.filter(isContextVarsAPI) as unknown as ContextVarsAPI[];
	return values.reduce((acc, value) => Object.assign(acc, value.contextVars()), {});
};
