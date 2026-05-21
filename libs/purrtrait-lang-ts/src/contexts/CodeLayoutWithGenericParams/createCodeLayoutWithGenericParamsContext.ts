import type { CodeLayoutContextValue } from '@purrtrait/code-layout';

import type { CodeLayoutWithGenericParamsContextValue } from './types';

export const createCodeLayoutWithGenericParamsContext = (
	ctx: CodeLayoutContextValue,
	genericParams: string[],
): CodeLayoutWithGenericParamsContextValue => {
	const existingParams = (ctx as CodeLayoutWithGenericParamsContextValue).genericParams ?? [];
	return {
		...ctx,
		genericParams: new Set([...existingParams, ...genericParams]),
	};
};
